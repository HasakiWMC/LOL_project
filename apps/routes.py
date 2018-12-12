#!/usr/bin/env python
# -*- coding:utf-8 -*-
import apps.restapi.summoner


def ini_routes(application):
    application.add_url_rule('/searchSummoner',
                             view_func=apps.restapi.summoner.SearchSummonerAPI.as_view('searchSummoner'))
