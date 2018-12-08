from flask import Flask, request
import requests

requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
s = requests.session()
s.keep_alive = False  # 关闭多余连接

app = Flask(__name__)

api_key = "RGAPI-49d0df94-95b4-40fe-9932-f346d23486dd"


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/searchSummoner', methods=['GET'])
def search_summoner():
    region_dict = {
        "Korea": "kr",
        "Europe West": "euw1"

    }
    summoner_name = request.args.get("summonerName")
    region = request.args.get("region")
    region_value = region_dict[region]
    response = s.get(
        url=("https://%s.api.riotgames.com/lol/summoner/v3/summoners/by-name/%s?api_key=%s" % (
        region_value, summoner_name, api_key)))
    return response.text


if __name__ == '__main__':
    app.run()
