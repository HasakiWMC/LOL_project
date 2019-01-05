#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests
import redis
from flask import json

from apps.common.exception import LOLException
from apps.common.private_const import PrivateConstant
from apps.common.singleton import Singleton
from apps.common.retcode import RetCode

# todo 这里的s是进来的所有用户都用同一个？怎么高并发？
requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接


class RiotDao(Singleton):
    __r = None

    def __init__(self):
        self.account_id = ""
        if self.__r is not None:
            return
        self.__r = redis.Redis("127.0.0.1")

    def send_request_api(self, region, api_value, **query_params):
        # done 使用redis数据库和Token Bucket算法实现限流 对两种限制流量的策略进行组合（全局） https://zhuanlan.zhihu.com/p/20872901
        # todo 如果全局超过，抛出429，显示系统繁忙
        # todo 还可以对IP进行限制。如某一ip访问频繁，显示操作频繁
        """
        Development Rate Limits：
        20 requests every 1 seconds
        100 requests every 2 minutes

        Production Rate Limits：
        3,000 requests every 10 seconds
        180,000 requests every 10 minutes
        """
        if self.validate_rate_limit() != 1:
            raise LOLException(RetCode.RET_SYSTEM_RATE_LIMIT_EXCEEDED, "The System is busy")

        headers = {"X-Riot-Token": PrivateConstant.API_KEY}
        req_url = "https://%s.api.riotgames.com%s" % (region, api_value)

        cnt = 0
        for query_param in query_params:
            if cnt == 0:
                req_url += "?"
            else:
                req_url += "&"
            req_url = "%s%s=%s" % (req_url, query_param, query_params.get(query_param))

            cnt += 1

        print("request url = %s" % req_url)
        res = s.get(url=req_url, headers=headers)
        # 用json.loads将str转为dict
        response_data = json.loads(res.text)
        print("API返回结果：%s" % response_data)
        # print(type(res.text))  # <class 'str'>
        # print(type(response_data))  # <class 'dict'>

        if isinstance(response_data, dict) and response_data.get("status"):
            print("get Riot HTTP STATUS CODE")
            status = response_data.get("status")
            message = status.get("message")
            status_code = status.get("status_code")
            # + 1000 是因为要和flask程序本身抛出的错误码做区分
            raise LOLException(1000 + int(status_code), message)

        return response_data

    def validate_rate_limit(self):
        # 使用redis数据库和Token Bucket算法实现限流
        lua = """
        local time = redis.pcall("TIME")
        local second = tonumber(time[1])
        local micro = tonumber(time[2])
        local current_time_millis = second * 1000 + math.floor(micro / 1000)
        
        local ratelimit_policy = redis.pcall("LRANGE", KEYS[1], 0, -1)
        
        local isPass = true
        
        --default only two policy
        local arr_current_permits = { 0, 0 }
        
        
        for i, v in ipairs(ratelimit_policy) do
            local ratelimit = redis.pcall("HMGET", v, "maxPermits", "lastrefilltime", "bucketInterval", "currentPermits", "initPermits")
            local max_permits = tonumber(ratelimit[1])
            local last_refill_time = tonumber(ratelimit[2])
            local bucket_interval = tonumber(ratelimit[3])
            local current_permits = tonumber(ratelimit[4])
            local init_permits = tonumber(ratelimit[5])
        
            if (current_time_millis - last_refill_time > bucket_interval * 1000) then
                arr_current_permits[i] = init_permits
            else
                local granted_token = math.floor((current_time_millis - last_refill_time) * max_permits / (bucket_interval * 1000))
                current_permits = math.min(max_permits, current_permits + granted_token)
                if (current_permits == 0) then
                    isPass = false
                else
                    arr_current_permits[i] = current_permits - 1
                end
            end
        end
        
        if (isPass == false) then
            return false
        else
            for i, v in ipairs(ratelimit_policy) do
                redis.pcall("HMSET", v, "lastrefilltime", current_time_millis, "currentPermits", arr_current_permits[i])
            end
        end
        
        return true
        """

        cmd = self.__r.register_script(lua)
        res = cmd(keys="riot_rate_limit_dev_policy")
        return res
