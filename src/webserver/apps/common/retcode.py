#!/usr/bin/env python
# -*- coding:utf-8 -*-


class RetCode:
    # 常量定义

    # 成功
    RET_SUCCESS = 0

    # 系统繁忙,请求api过多
    RET_SYSTEM_RATE_LIMIT_EXCEEDED = 429

    # 程序代码出错通用错误码
    RET_SYSTEM_ERROR = 500

    # TODO 这部分完全不需要在后台定义，全部移到前台供显示用
    # 请求拳头API返回HTTP状态码 HTTP STATUS CODE + 1000
    # + 1000 是因为要和flask程序本身抛出的错误码做区分

    RET_API_BAD_REQUEST = 1400  # Bad request

    RET_API_UNAUTHORIZED = 1401  # Unauthorized

    RET_API_FORBIDDEN = 1403  # Forbidden

    RET_API_DATA_NOT_FOUNT = 1404  # Data not found

    RET_API_METHOD_NOT_ALLOWED = 1405  # Method not allowed

    RET_API_UNSUPPORTED_MEDIA_TYPE = 1415  # Unsupported media type

    RET_API_RATE_LIMIT_EXCEEDED = 1429  # Rate limit exceeded

    RET_API_INTERNAL_SERVER_ERROR = 1500  # Internal server error

    RET_API_BAD_GATEWAY = 1502  # Bad gateway

    RET_API_SERVICE_UNAVAILABLE = 1503  # Service unavailable

    RET_GATEWAY_TIMEOUT = 1504  # Gateway timeout

    # 输入的召唤师名称或地区错误
    RET_SUMMONER_INPUT_ERROR = 2000
