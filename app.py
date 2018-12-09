from flask import Flask, request
import requests
from util.validate import Validate

requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接

app = Flask(__name__)

api_key = "RGAPI-d315d1b1-381d-4a03-b19c-b7047e020e3f"


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/searchSummoner', methods=['GET'])
def search_summoner():
    region = request.args.get("region")
    summoner_name = request.args.get("summonerName")

    # 校检region和summoner名字是否规范
    # Validate.validate_summoner_input(region, summoner_name)

    region_dict = {
        "Korea": "kr",
        "Europe West": "euw1"

    }
    region_value = region_dict[region]


    response = s.get(
        url=("https://%s.api.riotgames.com/lol/summoner/v3/summoners/by-name/%s?api_key=%s" % (
        region_value, summoner_name, api_key)))
    return response.text


if __name__ == '__main__':
    app.run()
