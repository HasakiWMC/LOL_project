#!/usr/bin/env python
# -*- coding:utf-8 -*-

from flask import Flask, request, jsonify, json
import requests
from app.common.validate_util import ValidateUtils
from app.common.exception import LOLException
from app.common.const import Constant

requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接

lol_app = Flask(__name__)

api_key = "RGAPI-5f21ab36-dfe4-419c-9902-ce6639afc8f3"


@lol_app.route('/')
def hello_world():
    return 'Hello World!'


@lol_app.route('/searchSummoner', methods=['GET'])
def search_summoner():
    result_data = ""
    try:
        region = request.args.get("region")
        summoner_name = request.args.get("summonerName")

        # 校检region和summoner名字是否规范
        # Validate.validate_summoner_input(region, summoner_name)

        region_dict = {
            "Korea": "kr",
            "Europe West": "euw1"

        }
        region_value = region_dict[region]

        ValidateUtils.validate_summoner_input(region_value, summoner_name)

        response = s.get(
            url=("https://%s.api.riotgames.com/lol/summoner/v3/summoners/by-name/%s?api_key=%s" % (
                region_value, summoner_name, api_key)))
        result_data = response.text
    except LOLException as ex:
        if ex.get_err_code() == 1000:
            return jsonify({"retCode": Constant.RET_CODE_SUMMONER_INPUT_ERROR})

    except Exception as ex:
        print(ex)
        return jsonify({"retCode": Constant.RET_CODE_SYSTEM_ERROR})
    print(result_data)
    return jsonify({"retCode": 0, "data": json.loads(result_data)})


if __name__ == '__main__':
    lol_app.run()
