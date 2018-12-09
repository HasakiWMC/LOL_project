#!/usr/bin/env python
# -*- coding:utf-8 -*-
""" 
@author:wmc
@file: validate.py 
@time: 2018/12/09 
"""
import re


class Validate:
    def validate_summoner_input(self, region, summoner_name):
        pattern = '^[\w .]+$'
        if re.match(pattern, summoner_name):
            return True
        else:
            return False
