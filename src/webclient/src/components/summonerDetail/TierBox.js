/* eslint-disable max-len */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../css/Summoner.css'
import {PropTypes} from "prop-types";

const rankRoman2Int = {
    "I": 1,
    "II": 2,
    "III": 3,
    "IV": 4,
    "V": 5
};

//tier从全大写转换为首字母大写，其余小写
const changeTierSpell = (tier) => {
    return tier.toLowerCase().replace(/(^)[a-z]/g, (char) => char.toUpperCase());
};

class TierBox extends Component {
    state = {
        RANKED_SOLO_5x5: {
            queueType: "",
            wins: 0,
            losses: 0,
            leagueName: "",
            rank: "",
            tier: "",
            leaguePoints: 0,
        },
        RANKED_FLEX_SR: {
            queueType: "",
            wins: 0,
            losses: 0,
            leagueName: "",
            rank: "",
            tier: "",
            leaguePoints: 0,
        }

    };

    componentDidMount() {
        if (this.props.tier) {
            console.log("TierBox接收数据：", this.props.tier);

            if (this.props.tier.hasOwnProperty("RANKED_SOLO_5x5")) {
                this.setState({
                        RANKED_SOLO_5x5: {
                            queueType: this.props.tier["RANKED_SOLO_5x5"]["queueType"],
                            wins: this.props.tier["RANKED_SOLO_5x5"]["wins"],
                            losses: this.props.tier["RANKED_SOLO_5x5"]["losses"],
                            leagueName: this.props.tier["RANKED_SOLO_5x5"]["leagueName"],
                            rank: this.props.tier["RANKED_SOLO_5x5"]["rank"],
                            tier: this.props.tier["RANKED_SOLO_5x5"]["tier"],
                            leaguePoints: this.props.tier["RANKED_SOLO_5x5"]["leaguePoints"],
                        }
                    }
                )
            } else {
                this.setState({
                        RANKED_SOLO_5x5: {}
                    }
                )
            }
            if (this.props.tier.hasOwnProperty("RANKED_FLEX_SR")) {
                this.setState({
                        RANKED_FLEX_SR: {
                            queueType: this.props.tier["RANKED_FLEX_SR"]["queueType"],
                            wins: this.props.tier["RANKED_FLEX_SR"]["wins"],
                            losses: this.props.tier["RANKED_FLEX_SR"]["losses"],
                            leagueName: this.props.tier["RANKED_FLEX_SR"]["leagueName"],
                            rank: this.props.tier["RANKED_FLEX_SR"]["rank"],
                            tier: this.props.tier["RANKED_FLEX_SR"]["tier"],
                            leaguePoints: this.props.tier["RANKED_FLEX_SR"]["leaguePoints"],
                        }
                    }
                )
            } else {
                this.setState({
                        RANKED_FLEX_SR: {}
                    }
                )
            }

            setTimeout(() => {
                console.log(this.state)
            }, 1000);
        }
    }

    render() {
        // todo 是否需要搞国际化，影响后续写法
        // todo 图标路径需要拼接，前提需要知道所有的链接地址，以及unranked的情况
        // todo 段位名称需要国际化吗？中文英文应该都可以，如果只需要英文根据"tier"做首字母大写即可
        const winSoloRate =
            parseInt(100 * this.state.RANKED_SOLO_5x5.wins / (this.state.RANKED_SOLO_5x5.wins + this.state.RANKED_SOLO_5x5.losses));

        // todo 需要判断是否存在段位，并且无段位需要显示unranked图标，其他信息都不显示
        const tierImg = this.state.RANKED_SOLO_5x5.tier.toLowerCase() + "_" + rankRoman2Int[this.state.RANKED_SOLO_5x5.rank];

        const tierImgSrc = "//opgg-static.akamaized.net/images/medals/" + tierImg + ".png";

        // todo 继续完善灵活组排信息
        return (

            <div>
                <div className="list-group-item">
                    <div className="SummonerRatingMedium">
                        <div className="Medal tip" title="单人排位">
                            <img src={tierImgSrc} className="Image"/>
                        </div>
                        <div className="TierRankInfo">
                            <div className="TierRank">
                                <span className="tierRank">
                                    {changeTierSpell(this.state.RANKED_SOLO_5x5.tier)}&nbsp;
                                    {
                                        //不是王者宗师大师就显示小段位
                                        ["CHALLENGER", "GRANDMASTER", "MASTER"].indexOf(this.state.RANKED_SOLO_5x5.tier) < 0
                                            ? rankRoman2Int[this.state.RANKED_SOLO_5x5.rank]
                                            : null
                                    }
                                </span>
                            </div>
                            <div className="TierInfo">
                              <span className="LeaguePoints">
                                  {this.state.RANKED_SOLO_5x5.leaguePoints} LP
                              </span>
                                &nbsp;/&nbsp;
                                <span className="WinLose">
                                    <span className="wins">{this.state.RANKED_SOLO_5x5.wins}胜</span>
                                    &nbsp;
                                    <span className="losses">{this.state.RANKED_SOLO_5x5.losses}负</span>
                                    <br/>
                                    <span className="winratio">胜率 {winSoloRate}%</span>
                                </span>
                            </div>
                            <div className="LeagueName">
                                {this.state.RANKED_SOLO_5x5.leagueName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="SummonerRatingLine tip tpd-delegation-uid-1">
                        <div className="Medal">
                            <img src="//opgg-static.akamaized.net/images/medals/default.png" className="Image"/>
                        </div>
                        <div className="TierRank">
                            <div className="TierRank unranked">Unranked</div>
                        </div>
                        <div className="TypeTeam">
                            <div className="StatSummaryType">Flex 5:5 Rank</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TierBox.propTypes = {
    tier: PropTypes.object.isRequired
};

export default TierBox;