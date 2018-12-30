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
    def send_request_api(self, region, api_value):
        # todo 工具类中加个方法同一个ip判断api请求是否超过限制，如超过，设置五分钟内禁止访问；
        # todo 同时整个web也要全局设置变量，如果超过，显示给用户系统繁忙
        """
        Rate Limits：
        20 requests every 1 seconds
        100 requests every 2 minutes
        """
        req_url = "https://%s.api.riotgames.com%s?api_key=%s" % (region, api_value, PrivateConstant.API_KEY)
        print("request url = %s" % req_url)
        res = s.get(url=req_url)
        # 用json.loads将str转为dict
        response_data = json.loads(res.text)
        print(response_data)
        # print(type(res.text))  # <class 'str'>
        # print(type(response_data))  # <class 'dict'>

        if isinstance(response_data, dict) and response_data.get("status"):
            print("get Riot HTTP STATUS CODE")
            status = response_data.get("status")
            message = status.get("message")
            status_code = status.get("status_code")
            raise LOLException(1000 + int(status_code), message)

        return response_data
