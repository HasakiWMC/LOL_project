#!/usr/bin/env python
# -*- coding:utf-8 -*-
from apps.restapi.summoner import Summoner


class Routes:
    @staticmethod
    def ini_routes(application):
        application.add_url_rule('/searchSummoner', view_func=Summoner.as_view('searchSummoner'))
