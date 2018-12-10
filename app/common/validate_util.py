#!/usr/bin/env python
# -*- coding:utf-8 -*-
""" 
@author:wmc
@file: validate_util.py
@time: 2018/12/09 
"""
import re

from app.common.const import Constant
from app.common.exception import LOLException


class ValidateUtils:
    @staticmethod
    def validate_reg_exp(pattern, string):
        if re.match(pattern, string):
            return True
        else:
            return False

    @staticmethod
    def validate_summoner_input(region, summoner_name):
        pattern = '^[\w .]+$'
        if not ValidateUtils.validate_reg_exp(pattern, summoner_name):
            raise LOLException(Constant.RET_CODE_SUMMONER_INPUT_ERROR, "wrong summoner name")
