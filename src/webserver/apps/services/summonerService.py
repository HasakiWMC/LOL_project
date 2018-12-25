#!/usr/bin/env python
# -*- coding:utf-8 -*-
import requests
from flask import json

from apps.common.exception import LOLException
from apps.common.retcode import RetCode
from apps.common.validate_util import ValidateUtils
from apps.common.const import Constant, RoitAPI
from apps.common.private_const import PrivateConstant

# todo 这里的s是进来的所有用户都用同一个？怎么高并发？
requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接


class SummonerService:

    # todo Service里的方法是改成静态还是非静态好？
    def search_summoner(self, region, summoner_name):
        # 校检region和summoner名字是否规范
        ValidateUtils.validate_summoner_input(region, summoner_name)
        region_value = Constant.REGIONAL_ENDPOINTS[region]
        # 获取召唤师基本信息，其中id需要被后续请求用到
        api_value = RoitAPI.API_V4_GET_SUMMONER_BY_NAME.format(summonerName=summoner_name)
        req_url = "https://%s.api.riotgames.com%s?api_key=%s" % (region_value, api_value, PrivateConstant.API_KEY)
        print("request url = %s" % req_url)
        res = s.get(url=req_url)
        # 用json.loads将str转为dict
        response_data = json.loads(res.text)
        if response_data and response_data.get("status"):
            status = response_data.get("status")
            message = status.get("message")
            status_code = status.get("status_code")
            if message == "Forbidden" and status_code == 403:
                raise LOLException(RetCode.RET_CODE_API_KEY_EXPIRED_ERROR, "your api key has expired")
        # print(type(res.text))  # <class 'str'>
        # print(type(response_data))  # <class 'dict'>
        summoner_profile = {
            "name": response_data.get('name'),
            "profileIconId": response_data.get('profileIconId'),
            "summonerLevel": response_data.get('summonerLevel')
        }
        summoner_id = response_data.get('id')
        # 根据id获取召唤师联盟位置信息
        api_value = RoitAPI.API_V4_GET_LEAGUE_POSITIONS_BY_ID.format(encryptedSummonerId=summoner_id)
        req_url = "https://%s.api.riotgames.com%s?api_key=%s" % (region_value, api_value, PrivateConstant.API_KEY)
        print("request url = %s" % req_url)
        res = s.get(url=req_url)
        # 用json.loads将str转为dict
        response_data = json.loads(res.text)
        # todo 查段位信息不止召唤师峡谷，先取第0个，后续要考虑其他排位形式
        summoner_tier = {
            "queueType": response_data[0].get('queueType'),
            "wins": response_data[0].get('wins'),
            "losses": response_data[0].get('losses'),
            "leagueName": response_data[0].get('leagueName'),
            "rank": response_data[0].get('rank'),
            "tier": response_data[0].get('tier'),
            "leaguePoints": response_data[0].get('leaguePoints')
        }
        # SummonerDetail页面有很多数据，需要将每个模块的数据单独封装，便于前台读取
        result = {
            "summoner_profile": summoner_profile,
            "summoner_tier": summoner_tier
        }
        return result
