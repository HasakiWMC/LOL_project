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
        self.account_id = ""

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
        summoner_tier = self.search_league_position_by_id()
        match_list = self.search_match_list_by_account_id()

        matches_detail = []
        for match_item in match_list.get("matches"):
            match_item_detail = self.search_match_by_match_id(match_item.get("gameId"))
            matches_detail.append(match_item_detail)

        # SummonerDetail页面有很多数据，需要将每个模块的数据单独封装，便于前台读取
        result = {
            "summoner_profile": summoner_profile,
            "summoner_tier": summoner_tier,
            "match_list": match_list,
            "matches_detail": matches_detail
        }
        return result

    def search_summoner_by_name(self, summoner_name):
        """
        根据名字获取召唤师基本信息
        :param summoner_name:
        :return: summoner_profile
        """
        # 校检summoner名字是否规范
        ValidateUtils.validate_summoner_input(summoner_name)

        api_value = RiotAPI.API_V4_GET_SUMMONER_BY_NAME.format(summonerName=summoner_name)

        response_data = self.riot_dao.send_request_api(self.region, api_value)

        # id需要被后续请求用到
        self.id = response_data.get('id')
        self.account_id = response_data.get('accountId')

        # 从riot api中取到的数据直接透传给前台
        summoner_profile = response_data
        return summoner_profile

    def search_league_position_by_id(self):
        """
        根据id获取召唤师段位信息
        :return: summoner_tier
        """
        api_value = RiotAPI.API_V4_GET_LEAGUE_POSITIONS_BY_ID.format(encryptedSummonerId=self.id)
        response_data = self.riot_dao.send_request_api(self.region, api_value)

        # api中内容是列表，改造成以排位模式为key，以内容为
        summoner_tier = {}
        if len(response_data) > 0:
            for position_item in response_data:
                queue_type = position_item.get("queueType")
                summoner_tier_item = position_item
                summoner_tier.update({queue_type: summoner_tier_item})
        return summoner_tier

    def search_match_list_by_account_id(self):
        """
        根据召唤师账户id获取比赛列表
        :return: match_list
        """
        api_value = RiotAPI.API_V4_GET_MATCH_LIST_BY_ACCOUNT_ID.format(encryptedAccountId=self.account_id)
        query_params = {
            "beginIndex": 0,
            "endIndex": 3
        }
        response_data = self.riot_dao.send_request_api(self.region, api_value, **query_params)

        match_list = response_data
        return match_list

    def search_match_by_match_id(self, game_id):
        """
        根据比赛id获取比赛信息
        :return: summoner_profile
        """
        api_value = RiotAPI.API_V4_GET_MATCH_BY_MATCH_ID.format(matchId=game_id)
        response_data = self.riot_dao.send_request_api(self.region, api_value)

        match = response_data
        return match
