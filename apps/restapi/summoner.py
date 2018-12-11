from flask.views import MethodView
from flask import request, jsonify, json
import requests
from apps.common.validate_util import ValidateUtils
from apps.common.exception import LOLException
from apps.common.const import RetCode, Const

requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接


class Summoner(MethodView):

    def get(self):
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
                    region_value, summoner_name, Const.API_KEY)))
            result_data = response.text
        except LOLException as ex:
            print("错误码=%s，错误描述=%s" % (ex.get_err_code(), ex.get_err_desc()))
            if ex.get_err_code() == 1000:
                return jsonify({"retCode": RetCode.RET_CODE_SUMMONER_INPUT_ERROR})

        except Exception as ex:
            print(ex)
            return jsonify({"retCode": RetCode.RET_CODE_SYSTEM_ERROR})
        print("返回数据=%s" % result_data)
        return jsonify({"retCode": 0, "data": json.loads(result_data)})
