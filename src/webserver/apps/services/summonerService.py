#!/usr/bin/env python
# -*- coding:utf-8 -*-
from apps.common.riot_dao import RiotDao
from apps.common.validate_util import ValidateUtils
from apps.common.const import Constant, RiotAPI


class SummonerService:
    # todo 这里初始化是否能支持高并发，是否需要改成单例模式
    riot_dao = RiotDao()

    def __init__(self):
        self.region = ""
        self.id = ""

    def search_summoner_detail(self, region, summoner_name):
        """
        获取召唤师详细信息
        :param region:
        :param summoner_name:
        :return: result
        """
        ValidateUtils.validate_region_input(region)
        region_value = Constant.REGIONAL_ENDPOINTS[region]
        self.region = region_value

        summoner_profile = self.search_summoner_by_name(summoner_name)
        summoner_tier = self.search_league_position_by_summoner_id()

        # SummonerDetail页面有很多数据，需要将每个模块的数据单独封装，便于前台读取
        result = {
            "summoner_profile": summoner_profile,
            "summoner_tier": summoner_tier
        }
        return result

    def search_league_position_by_summoner_id(self):
        """
        根据id获取召唤师段位信息
        :return: summoner_tier
        """
        api_value = RiotAPI.API_V4_GET_LEAGUE_POSITIONS_BY_ID.format(encryptedSummonerId=self.id)
        response_data = self.riot_dao.send_request_api(self.region, api_value)
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
        return summoner_tier

    def search_summoner_by_name(self, summoner_name):
        """
        获取召唤师基本信息
        :param summoner_name:
        :return: summoner_profile
        """
        # 校检summoner名字是否规范
        ValidateUtils.validate_summoner_input(summoner_name)

        api_value = RiotAPI.API_V4_GET_SUMMONER_BY_NAME.format(summonerName=summoner_name)
        response_data = self.riot_dao.send_request_api(self.region, api_value)

        # id需要被后续请求用到
        summoner_id = response_data.get('id')
        self.id = summoner_id

        summoner_profile = {
            "name": response_data.get('name'),
            "profileIconId": response_data.get('profileIconId'),
            "summonerLevel": response_data.get('summonerLevel')
        }
        return summoner_profile
