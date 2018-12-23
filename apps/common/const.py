#!/usr/bin/env python
# -*- coding:utf-8 -*-


class Constant:
    API_KEY = "RGAPI-5ce62e81-3d3e-4b0c-a62d-d563f690ad63"
    REGIONAL_ENDPOINTS = {
        "BR": "br1",
        "EUNE": "eun1",
        "EUW": "euw1",
        "JP": "jp1",
        "KR": "kr",
        "LAN": "la1",
        "LAS": "la2",
        "NA": "na1",
        "OCE": "oc1",
        "TR": "tr1",
        "RU": "ru",
        "PBE": "pbe1"
    }


class RegExp:
    PATTERN_SUMMONER = "^[\w .]+$"


class RoitAPI:
    # V3 API——19年1月Riot将弃用
    # Get a summoner by summoner name.
    API_V3_GET_SUMMONER_BY_NAME = "/lol/summoner/v3/summoners/by-name/{summonerName}"
    # Get league positions in all queues for a given summoner ID.
    API_V3_GET_LEAGUE_POSITIONS_BY_ID = "/lol/league/v3/positions/by-summoner/{summonerId}"

    # V4 API
    API_V4_GET_SUMMONER_BY_NAME = "/lol/summoner/v4/summoners/by-name/{summonerName}"
    API_V4_GET_LEAGUE_POSITIONS_BY_ID = "/lol/league/v4/positions/by-summoner/{encryptedSummonerId}"
