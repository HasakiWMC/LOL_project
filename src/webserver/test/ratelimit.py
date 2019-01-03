#!/usr/bin/env python
# -*- coding:utf-8 -*-

import time

RateLimitPolicyDevelopment1 = {
    "id": "dev1",
    "time": 1,  # 秒
    "limit": 20,
    "initToken": 10
}

RateLimitPolicyDevelopment2 = {
    "id": "dev2",
    "time": 120,  # 秒
    "limit": 100,
    "initToken": 50
}


def access():
    from .policy1 import remain_token1, timestamp1
    now = int(round(time.time() * 1000))

    # 策略1  1s不超过20次
    if now - timestamp1 > RateLimitPolicyDevelopment1.get("time") * 1000:  # 或者当前时间和剩余token不存在初次建立
        remain_token1 = RateLimitPolicyDevelopment1.get("limit") - 1
        return True
    else:
        granted_token = int((now - timestamp1) * RateLimitPolicyDevelopment1.get("limit") / 1000)
        remain_token1 = min(RateLimitPolicyDevelopment1.get("limit"), remain_token1 + granted_token)
        assert remain_token1 >= 0
        if remain_token1 == 0:
            return False
        else:
            remain_token1 -= 1
            return True
