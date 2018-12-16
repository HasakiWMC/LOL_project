import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../css/Summoner.css'
import {PropTypes} from "prop-types";
import SummonerHeader from "./SummonerHeader";


class TierBox extends Component {
    state = {
        queueType: "",
        wins: 0,
        losses: 0,
        leagueName: "",
        rank: "",
        tier: "",
        leaguePoints: 0,
    };

    componentDidMount() {
        if (this.props.tier.summoner && this.props.tier.summoner.data &&
            this.props.tier.summoner.data.summoner_tier) {
            console.log("TierBox接收数据：", this.props.tier.summoner.data.summoner_tier);
            this.setState({
                queueType: this.props.tier.summoner.data.summoner_tier.queueType,
                wins: this.props.tier.summoner.data.summoner_tier.wins,
                losses: this.props.tier.summoner.data.summoner_tier.losses,
                leagueName: this.props.tier.summoner.data.summoner_tier.leagueName,
                rank: this.props.tier.summoner.data.summoner_tier.rank,
                tier: this.props.tier.summoner.data.summoner_tier.tier,
                leaguePoints: this.props.tier.summoner.data.summoner_tier.leaguePoints,
            });
        }
    }

    render() {
        const winRate = parseInt(100 * this.state.wins / (this.state.wins + this.state.losses));

        return (
            <div>
                <div className="list-group-item">
                    <div className="SummonerRatingMedium">
                        <div className="Medal tip" title="单人排位">
                            <img src="//opgg-static.akamaized.net/images/medals/grandmaster_1.png" className="Image"/>
                        </div>
                        <div className="TierRankInfo">
                            <div className="TierRank">
                                <span className="tierRank">Grandmaster</span>
                            </div>
                            <div className="TierInfo">
                              <span className="LeaguePoints">
                                  {this.state.leaguePoints} LP
                              </span>
                                &nbsp;/&nbsp;
                                <span className="WinLose">
                                    <span className="wins">{this.state.wins}胜</span>
                                    &nbsp;
                                    <span className="losses">{this.state.losses}负</span>
                                    <br/>
                                    <span className="winratio">胜率 {winRate}%</span>
                                </span>
                            </div>
                            <div className="LeagueName">
                                {this.state.leagueName}
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