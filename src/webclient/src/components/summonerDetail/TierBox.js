import React, {Component} from 'react';
import {connect} from 'react-redux';

import {rankRoman2Int} from "../../common/constant";

import '../../css/Summoner.css'
import {PropTypes} from "prop-types";


class TierBox extends Component {

    //tier从全大写转换为首字母大写，其余小写
    changeTierSpell = (tier) => {
        return tier.toLowerCase().replace(/(^)[a-z]/g, (char) => char.toUpperCase());
    };

    //不是王者宗师大师就显示小段位
    displayRank = (tier, rank) => {
        return ["CHALLENGER", "GRANDMASTER", "MASTER"].indexOf(tier) < 0
            ? rankRoman2Int[rank]
            : null
    };

    componentDidMount() {
        if (this.props.tier) {
            console.log("TierBox接收数据：", this.props.tier);
        }
    }

    render() {
        const {RANKED_SOLO_5x5, RANKED_FLEX_SR} = this.props.tier;

        // todo 是否需要搞国际化，影响后续写法
        const soloWinRate = RANKED_SOLO_5x5
            ? parseInt(100 * RANKED_SOLO_5x5.wins / (RANKED_SOLO_5x5.wins + RANKED_SOLO_5x5.losses))
            : null;

        const soloTierImg = RANKED_SOLO_5x5
            ? RANKED_SOLO_5x5.tier.toLowerCase() + "_" + rankRoman2Int[RANKED_SOLO_5x5.rank]
            : "default";

        const soloTierImgSrc = "//opgg-static.akamaized.net/images/medals/" + soloTierImg + ".png";

        const flexWinRate = RANKED_FLEX_SR
            ? parseInt(100 * RANKED_FLEX_SR.wins / (RANKED_FLEX_SR.wins + RANKED_FLEX_SR.losses))
            : null;

        const flexTierImg = RANKED_FLEX_SR
            ? RANKED_FLEX_SR.tier.toLowerCase() + "_" + rankRoman2Int[RANKED_FLEX_SR.rank]
            : "default";

        const flexTierImgSrc = "//opgg-static.akamaized.net/images/medals/" + flexTierImg + ".png";
        return (
            <div>
                <div className="list-group-item">
                    <div className="SummonerRatingMedium">
                        <div className="Medal tip" title="单人排位">
                            <img src={soloTierImgSrc} className="Image"/>
                        </div>
                        {
                            RANKED_SOLO_5x5
                                ? (
                                    <div className="TierRankInfo">
                                        <div className="TierRank">
                                            <span className="tierRank">
                                                {this.changeTierSpell(RANKED_SOLO_5x5.tier)}&nbsp;
                                                {this.displayRank(RANKED_SOLO_5x5.tier, RANKED_SOLO_5x5.rank)}
                                            </span>
                                        </div>
                                        <div className="TierInfo">
                                            <span className="LeaguePoints">
                                                {RANKED_SOLO_5x5.leaguePoints} LP
                                            </span>
                                            &nbsp;/&nbsp;
                                            <span className="WinLose">
                                                <span className="wins">{RANKED_SOLO_5x5.wins}胜</span>
                                                &nbsp;
                                                <span className="losses">{RANKED_SOLO_5x5.losses}负</span>
                                                <br/>
                                                <span className="winratio">胜率 {soloWinRate}%</span>
                                            </span>
                                        </div>
                                        <div className="LeagueName">
                                            {RANKED_SOLO_5x5.leagueName}
                                        </div>
                                    </div>
                                )
                                : (
                                    <div className="TierRankInfo">
                                        <div className="TierRank">
                                                <span className="tierRank">
                                                    Unranked
                                                </span>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="list-group-item">
                    {
                        RANKED_FLEX_SR
                            ? (
                                <div className="SummonerRatingLine tip tpd-delegation-uid-1">
                                    <div className="Medal">
                                        <img src={flexTierImgSrc} className="Image"/>
                                    </div>
                                    <div className="TierRank">
                                        <div className="TierRank">
                                            {this.changeTierSpell(RANKED_FLEX_SR.tier)}&nbsp;
                                            {this.displayRank(RANKED_FLEX_SR.tier, RANKED_FLEX_SR.rank)}
                                        </div>
                                        <div className="leaguePoints">
                                            {RANKED_FLEX_SR.leaguePoints} LP
                                        </div>
                                    </div>
                                    <div className="TypeTeam">
                                        <div className="StatSummaryType">Flex 5:5 Rank</div>
                                        <div className="TeamName">
                                            {RANKED_FLEX_SR.leagueName}
                                        </div>
                                    </div>
                                    <span className="WinLose">
                                        <span className="wins">{RANKED_FLEX_SR.wins}胜</span>
                                        <span className="losses">{RANKED_FLEX_SR.losses}负</span>
                                        <br/>
                                        <span className="winratio">{flexWinRate}%</span>
                                    </span>
                                </div>
                            )
                            : (
                                <div className="SummonerRatingLine tip tpd-delegation-uid-1">
                                    <div className="Medal">
                                        <img src={flexTierImgSrc} className="Image"/>
                                    </div>
                                    <div className="TierRank">
                                        <div className="TierRank">
                                            Unranked
                                        </div>
                                    </div>
                                    <div className="TypeTeam">
                                        <div className="StatSummaryType">Flex 5:5 Rank</div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        )
    }
}

TierBox.propTypes = {
    tier: PropTypes.object.isRequired
};

export default TierBox;