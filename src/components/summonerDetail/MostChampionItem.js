import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../css/Summoner.css'

class MostChampionItem extends Component {
    render() {
        return (
            <div className="ChampionBox Ranked">
                <div className="Face">
                    <img className="ChampionImage"
                         alt="诡术妖姬"
                         src="//opgg-static.akamaized.net/images/lol/champion/Leblanc.png?image=w_45&v=15354684000"/>
                </div>
                <div className="ChampionInfo">
                    <div className="ChampionName">
                        诡术妖姬
                    </div>
                    <div className="ChampionMinionKill tip"
                         title="平均 CS (CS/分)">
                        CS 170.1 (7.0)
                    </div>

                </div>
                <div className="PersonalKDA">
                    <div className="KDA green tip"
                         title="(K 6.2 + A 6.53) / D 3.6">
                        <span className="KDA">3.54:1</span>
                        <span className="Text">KDA</span>
                    </div>
                    <div className="KDAEach">
                        <span className="Kill">6.2</span>
                        <span className="Bar">/</span>
                        <span className="Death">3.6</span>
                        <span className="Bar">/</span>
                        <span className="Assist">6.5</span>
                    </div>
                </div>

                <div className="Played">
                    <div className="WinRatio normal tip" title="胜率">
                        53%
                    </div>
                    <div className="Title">15 游戏</div>
                </div>
            </div>
        )
    }
}

export default MostChampionItem;