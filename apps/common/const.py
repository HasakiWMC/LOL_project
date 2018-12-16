#!/usr/bin/env python
# -*- coding:utf-8 -*-


class Constant:
    API_KEY = "RGAPI-0370eb7e-3ed9-4d37-a225-cf5ff63f97b1"
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
    #  SUMMONER-V4

    # Get a summoner by summoner name.
    API_GET_SUMMONER_BY_NAME = "/lol/summoner/v4/summoners/by-name/{summonerName}"
