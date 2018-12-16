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
        result = ""
        try:
            region = request.args.get("region")
            summoner_name = request.args.get("summonerName")

            # 校检region和summoner名字是否规范
            ValidateUtils.validate_summoner_input(region, summoner_name)

            region_value = Constant.REGIONAL_ENDPOINTS[region]

            # todo 将此内容移到service中 ===start===
            # 获取召唤师基本信息，其中id需要被后续请求用到
            api_value = RoitAPI.API_V3_GET_SUMMONER_BY_NAME.format(summonerName=summoner_name)

            req_url = "https://%s.api.riotgames.com%s?api_key=%s" % (region_value, api_value, Constant.API_KEY)

            print("request url = %s" % req_url)

            res = s.get(url=req_url)

            # 用json.loads将str转为dict
            response_data = json.loads(res.text)
            # print(type(res.text))  # <class 'str'>
            # print(type(response_data))  # <class 'dict'>

            summoner_header = {
                "name": response_data.get('name'),
                "profileIconId": response_data.get('profileIconId'),
                "summonerLevel": response_data.get('summonerLevel')
            }

            summoner_id = response_data.get('id')

            # 根据id获取召唤师联盟位置信息
            api_value = RoitAPI.API_V3_GET_LEAGUE_POSITIONS_BY_ID.format(summonerId=summoner_id)

            req_url = "https://%s.api.riotgames.com%s?api_key=%s" % (region_value, api_value, Constant.API_KEY)

            print("request url = %s" % req_url)

            res = s.get(url=req_url)

            # 用json.loads将str转为dict
            response_data = json.loads(res.text)

            # todo 查段位信息不止召唤师峡谷，先取第0个，后续要考虑其他排位形式
            summoner_tier = {
                "queueType": response_data[0].get('queueType'),
                "wins": response_data[0].get('wins'),
                "losses": response_data[0].get('losses'),
                "leagueName": response_data[0].get('leagueName'),
                "rank": response_data[0].get('rank'),
                "tier": response_data[0].get('tier'),
                "leaguePoints": response_data[0].get('leaguePoints')
            }

            # SummonerDetail页面有很多数据，需要将每个模块的数据单独封装，便于前台读取
            result = {
                "summoner_header": summoner_header,
                "summoner_tier": summoner_tier
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
