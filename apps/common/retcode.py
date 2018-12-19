#!/usr/bin/env python
# -*- coding:utf-8 -*-


class RetCode:
    # 常量定义

    # 成功
    RET_CODE_SUCCESS = 0

    # 程序代码出错通用错误码
    RET_CODE_SYSTEM_ERROR = 500

    # 输入的召唤师名称或地区错误
    RET_CODE_SUMMONER_INPUT_ERROR = 1000
    # API key过期或没有权限
    RET_CODE_API_KEY_EXPIRED_ERROR = 1001
