#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests
from flask import json

from apps.common.exception import LOLException
from apps.common.private_const import PrivateConstant

# todo 这里的s是进来的所有用户都用同一个？怎么高并发？
requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接


class RiotDao(object):
    def send_request_api(self, region, api_value, **query_params):
        # todo 使用redis数据库和Token Bucket算法实现限流  https://zhuanlan.zhihu.com/p/20872901
        # todo 对两种限制流量的策略进行组合（全局），还可以对IP进行限制。
        # todo 如果全局超过，抛出429，显示系统繁忙；如某一ip访问频繁，显示操作频繁
        """
        Development Rate Limits：
        20 requests every 1 seconds
        100 requests every 2 minutes

        Production Rate Limits：
        3,000 requests every 10 seconds
        180,000 requests every 10 minutes
        """
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
