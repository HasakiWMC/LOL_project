from flask.views import MethodView
from flask import request, jsonify, json
import requests
from apps.common.validate_util import ValidateUtils
from apps.common.exception import LOLException
from apps.common.const import Constant, RoitAPI
from apps.common.retcode import RetCode

requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接


class SearchSummonerAPI(MethodView):

    def get(self):
        try:
            region = request.args.get("region")
            summoner_name = request.args.get("summonerName")

            # 校检region和summoner名字是否规范
            ValidateUtils.validate_summoner_input(region, summoner_name)

            region_value = Constant.REGIONAL_ENDPOINTS[region]

            # todo 将此内容移到service中 ===start===
            api_value = RoitAPI.API_GET_SUMMONER_BY_NAME.format(summonerName=summoner_name)

            request_url = "https://%s.api.riotgames.com%s?api_key=%s" % (region_value, api_value, Constant.API_KEY)

            print("request url = %s" % request_url)

            response = s.get(url=request_url)

            response_data = json.loads(response.text)

            # 用json.loads将str转为dict
            # print(type(response.text))  # <class 'str'>
            # print(type(response_data))  # <class 'dict'>

            summoner_header = {
                "name": response_data.get('name'),
                "profileIconId": response_data.get('profileIconId'),
                "summonerLevel": response_data.get('summonerLevel')
            }

            # SummonerDetail页面有很多数据，需要将每个模块的数据单独封装，便于前台读取
            result = {
                "summoner_header": summoner_header
            }

            # todo 将此内容移到service中 ===end===

        except LOLException as ex:
            print("错误码 = %s，错误描述 = %s" % (ex.get_err_code(), ex.get_err_desc()))
            if ex.get_err_code() == 1000:
                return jsonify({"retCode": RetCode.RET_CODE_SUMMONER_INPUT_ERROR})

        except Exception as ex:
            print(ex)
            return jsonify({"retCode": RetCode.RET_CODE_SYSTEM_ERROR})
        print("返回数据 = %s" % result)
        return jsonify({"retCode": 0, "data": result})
