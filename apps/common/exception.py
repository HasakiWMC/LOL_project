#!/usr/bin/env python
# -*- coding:utf-8 -*-


class LOLException(Exception):
    err_code = 0  # 错误码
    err_desc = ""  # 错误描述

    def __init__(self, err_code, err_desc):
        self.err_code = err_code
        self.err_desc = err_desc

    def get_err_code(self):
        return self.err_code

    def get_err_desc(self):
        return self.err_desc
