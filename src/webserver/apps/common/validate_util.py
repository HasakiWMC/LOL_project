#!/usr/bin/env python
# -*- coding:utf-8 -*-
""" 
@author:wmc
@file: validate_util.py
@time: 2018/12/09 
"""
import re

from apps.common.retcode import RetCode
from apps.common.exception import LOLException
from apps.common.const import RegExp, Constant


class ValidateUtils:
    @staticmethod
    def validate_reg_exp(pattern, string):
        if re.match(pattern, string):
            return True
        else:
            return False

    @staticmethod
    def validate_summoner_input(region, summoner_name):
        if not ValidateUtils.validate_reg_exp(RegExp.PATTERN_SUMMONER, summoner_name) or summoner_name == "":
            raise LOLException(RetCode.RET_SUMMONER_INPUT_ERROR, "Summoner name format error: \"%s\"" % summoner_name)
        if region not in Constant.REGIONAL_ENDPOINTS:
            raise LOLException(RetCode.RET_SUMMONER_INPUT_ERROR, "Summoner region error : \"%s\"" % region)
