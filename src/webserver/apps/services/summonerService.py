#!/usr/bin/env python
# -*- coding:utf-8 -*-
from apps.common.riot_dao import RiotDao
from apps.common.validate_util import ValidateUtils
from apps.common.const import Constant, RiotAPI


class SummonerService:
    # todo 这里初始化是否能支持高并发
    riot_dao = RiotDao()

    # todo Service里的方法是改成静态还是非静态好？
    def search_summoner(self, region, summoner_name):
        # 校检region和summoner名字是否规范
        ValidateUtils.validate_summoner_input(region, summoner_name)
        region_value = Constant.REGIONAL_ENDPOINTS[region]
        # 获取召唤师基本信息，其中id需要被后续请求用到
        api_value = RiotAPI.API_V4_GET_SUMMONER_BY_NAME.format(summonerName=summoner_name)
        response_data = self.riot_dao.send_request_api(region_value, api_value)

        summoner_profile = {
            "name": response_data.get('name'),
            "profileIconId": response_data.get('profileIconId'),
            "summonerLevel": response_data.get('summonerLevel')
        }
        summoner_id = response_data.get('id')
        # 根据id获取召唤师联盟位置信息
        api_value = RiotAPI.API_V4_GET_LEAGUE_POSITIONS_BY_ID.format(encryptedSummonerId=summoner_id)
        response_data = self.riot_dao.send_request_api(region_value, api_value)

        summoner_tier = {}
        if len(response_data) > 0:
            for position_item in response_data:
                queue_type = position_item.get("queueType")
                wins = position_item.get("wins")
                losses = position_item.get("losses")
                league_name = position_item.get("leagueName")
                rank = position_item.get("rank")
                tier = position_item.get("tier")
                league_points = position_item.get("leaguePoints")
                summoner_tier_item = {
                    "queueType": queue_type,
                    "wins": wins,
                    "losses": losses,
                    "leagueName": league_name,
                    "rank": rank,
                    "tier": tier,
                    "leaguePoints": league_points,
                }
                summoner_tier.update({queue_type: summoner_tier_item})

        # SummonerDetail页面有很多数据，需要将每个模块的数据单独封装，便于前台读取
        result = {
            "summoner_profile": summoner_profile,
            "summoner_tier": summoner_tier
        }
        return result
