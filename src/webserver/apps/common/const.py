#!/usr/bin/env python
# -*- coding:utf-8 -*-


class Constant:
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


class RiotAPI:
    # V4 API

    # Get a summoner by summoner name.
    API_V4_GET_SUMMONER_BY_NAME = "/lol/summoner/v4/summoners/by-name/{summonerName}"

    # Get league positions in all queues for a given summoner ID.
    API_V4_GET_LEAGUE_POSITIONS_BY_ID = "/lol/league/v4/positions/by-summoner/{encryptedSummonerId}"

    # Get matchlist for games played on given account ID and platform ID
    # and filtered using given filter parameters, if any.
    API_V4_GET_MATCH_LIST_BY_ACCOUNT_ID = "/lol/match/v4/matchlists/by-account/{encryptedAccountId}"

    # Get match by match ID.
    API_V4_GET_MATCH_BY_MATCH_ID = "/lol/match/v4/matches/{matchId}"
