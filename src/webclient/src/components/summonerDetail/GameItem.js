import React, {Component} from 'react';

import {Collapse, Tabs} from 'antd';
import classnames from 'classnames';

import {championId2Name, spellId2Name, runeId2Name} from "../../common/constant"
import '../../css/Summoner.css'
import '../../css/Common.css'

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

const match_queues = {
    420: "单人排位",
    430: "匹配模式",
    450: "极地大乱斗"
};

const parseGameCreation = (timestamp) => {
    return new Date(parseInt(timestamp)).toLocaleString()
};

const calGameCreationInterval = (timestamp) => {
    const now = new Date().getTime();
    let timeDiff = Math.floor(now - timestamp) / 1000;
    const y = Math.floor(timeDiff / (365 * 3600 * 24));
    timeDiff = timeDiff % (365 * 3600 * 24);
    const m = Math.floor(timeDiff / (3600 * 24 * 30));
    timeDiff = timeDiff % (3600 * 24 * 30);
    const d = Math.floor(timeDiff / (3600 * 24));
    timeDiff = timeDiff % (3600 * 24);
    const h = Math.floor(timeDiff / 3600);
    timeDiff = timeDiff % 3600;
    const mm = Math.floor(timeDiff / 60);
    if (y > 0) {
        return y + "年前";
    } else if (m > 0) {
        return m + "月前";
    } else if (d > 0) {
        return d + "天前";
    } else if (h > 0) {
        return h + "小时前";
    } else if (mm > 0) {
        return mm + "分前";
    }
};

const parseGameDuration = (seconds) => {
    const h = Math.floor(seconds / 3600);
    let timeDiff = seconds % 3600;
    const mm = Math.floor(timeDiff / 60);
    timeDiff = timeDiff % 60;
    return (h > 0 ? (h + "小时") : "") + " " + mm + "分" + " " + timeDiff + "秒"
};


//根据账户id从比赛人员基本信息中查找被查询的参与者
const findRequestParticipantIdentityByAccountId = (participantIdentities, accountId) => {
    return participantIdentities.find((participantIdentity) => {
        return accountId === participantIdentity["player"]["accountId"]
    })
};

//根据参与者id从比赛人员详细信息中查找被查询的参与者
const findRequestParticipantByParticipantId = (participants, participantId) => {
    return participants.find((participant) => {
        return participantId === participant["participantId"]
    })
};


class GameItem extends Component {

    componentDidMount() {
        if (this.props.game) {
            console.log("Game接收game数据：", this.props.game);
        }
        if (this.props.accountId) {
            console.log("Game接收accountId数据：", this.props.accountId);
        }
    }

    render() {
        const {
            gameCreation, gameDuration, gameId, gameMode, gameType, gameVersion, mapId, participantIdentities,
            participants, platformId, queueId, seasonId, teams
        } = this.props.game;

        const {participantId} = findRequestParticipantIdentityByAccountId(participantIdentities, this.props.accountId);

        const {championId, spell1Id, spell2Id, teamId, stats} =
            findRequestParticipantByParticipantId(participants, participantId);

        const {
            perk0, perkSubStyle, win, kills, deaths, assists, champLevel, visionScore,
            item0, item1, item2, item3, item4, item5, item6
        } = stats;

        const gameResult = win ? "胜利" : "失败";

        let KDA;
        if (deaths !== 0) {
            KDA = ((kills + assists) / deaths).toFixed(2) + ":1"
        } else if (kills + assists > 0) {
            KDA = "Perfect";
        } else {
            KDA = "0.00:1"
        }

        const opgg_prefix = "//opgg-static.akamaized.net/images/lol";

        const itemNode = (itemId) => (
            <div className="Item">
                {itemId !== 0
                    ? (<img
                        src={`${opgg_prefix}/item/${itemId}.png`}
                        className="Image tip"
                        title="<b style='color: #00cfbc'>破损的秒表</b><br><span>升级为秒表</span><br><span><unique>唯一被动：</unique>目前是破损状态，但仍然可以用于升级。<br><br><rules>在打破一个【秒表】后，商店主人就只会卖给你【破损的秒表】了。</rules></span><br><span>Cost:</span> <span style='color: #ffc659'>600 (600)</span>"
                        alt="破损的秒表"/>)
                    : null
                }
            </div>
        );

        //item6固定为饰品，往前放为显示好看
        const itemList = [
            item0, item1, item2, item6,
            item3, item4, item5
        ];

        const itemListNode = itemList.map((item) => {
            return itemNode(item);
        });

        const summonerNode = (summoner) => (
            <div className={classnames({
                "Summoner": true,
                "Requester": participantId === summoner.participantId
            })}>
                <div className="ChampionImage">
                    <img style={{width: "16px", height: "16px"}}
                         src={`${opgg_prefix}/champion/${championId2Name[summoner.championId]["id"]}.png`}
                         className="Image" alt="刀锋舞者"/>
                </div>
                <div className="SummonerName">
                    <a href="//www.op.gg/summoner/userName=topgotop"
                       className="Link"
                       target="_blank">{summoner.summonerName}</a>
                </div>
            </div>);

        const findChampionIdSummonerNameByGame = (participantIdentities, participants) => {
            const summonerList = [];
            participantIdentities.map((item, index) => {
                summonerList.push({
                    participantId: participants[index]["participantId"],
                    championId: participants[index]["championId"],
                    summonerName: item.player.summonerName,
                })
            });
            return summonerList;
        };

        const summonerList = findChampionIdSummonerNameByGame(participantIdentities, participants);

        const team1SummonerListNode = summonerList.slice(0, 5).map((item) => {
            return summonerNode(item);
        });

        const team2SummonerListNode = summonerList.slice(5, 10).map((item) => {
            return summonerNode(item);
        });

        return (
            <div className="GameItemWrap list-group-item"
                 style={{padding: 0, WebkitBorderBottomLeftRadius: "0.5em", WebkitBorderBottomRightRadius: "0.5em"}}>
                <div className={classnames({
                    "GameItem": true,
                    "Win": win,
                    "Lose": !win
                })} data-summoner-id="4460427"
                     data-game-time="1544721556" data-game-id="3456429311"
                     data-game-result="win">
                    <div className="Content">
                        <div className="GameStats">
                            <div className="GameType">
                                {match_queues[queueId]}
                            </div>
                            <div className="TimeStamp"><span
                                className="_timeago _timeCountAssigned tip"
                                data-datetime="1544721556" data-type=""
                                data-interval="60"
                                title={parseGameCreation(gameCreation)}>{calGameCreationInterval(gameCreation)}</span>
                            </div>
                            <div className="Bar"/>
                            <div className="GameResult">
                                {gameResult}
                            </div>
                            <div className="GameLength">{parseGameDuration(gameDuration)}</div>

                        </div>
                        <div className="GameSettingInfo">
                            <div className="ChampionImage">
                                <a href="/champion/irelia/statistics"
                                   target="_blank"><img
                                    src={`${opgg_prefix}/champion/${championId2Name[championId]["id"]}.png`}
                                    className="Image" alt="刀锋舞者"/></a>
                            </div>

                            <div className="SummonerSpell">
                                <div className="Spell">
                                    <img
                                        src={`${opgg_prefix}/spell/${spellId2Name[spell1Id]}.png`}
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>引燃</b><br><span>引燃是对单体敌方目标施放的持续性伤害技能，在5秒的持续时间里造成80-505（取决于英雄等级）真实伤害，获得目标的视野，并减少目标所受的治疗和回复效果。</span>"
                                        alt="引燃"/>
                                </div>
                                <div className="Spell">
                                    <img
                                        src={`${opgg_prefix}/spell/${spellId2Name[spell2Id]}.png`}
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>闪现</b><br><span>使英雄朝着你的指针所停的区域瞬间传送一小段距离。</span>"
                                        alt="闪现"/>
                                </div>
                            </div>
                            <div className="Runes">
                                <div className="Rune">
                                    <img
                                        src={`${opgg_prefix}/perk/${perk0}.png`}
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>征服者</b><br><span>在处于战斗状态4秒后，你对敌方英雄发起的第一次攻击将为你提供6 - 35攻击力，基于等级，持续3秒，在此期间将你对该英雄造成伤害值的20%转化为真实伤害。<br><br><rules>仅限近战：对敌方英雄造成伤害时可刷新这个增益效果。</rules></span>"
                                        alt="征服者"/>
                                </div>
                                <div className="Rune">
                                    <img
                                        src={`${opgg_prefix}/perkStyle/${perkSubStyle}.png`}
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>主宰</b><br><span>爆发伤害并前往目标</span>"
                                        alt="主宰"/>
                                </div>
                            </div>
                            <div className="ChampionName">
                                <a href="/champion/irelia/statistics"
                                   target="_blank">{championId2Name[championId]["name"]}</a>
                            </div>
                        </div>
                        <div className="KDA">
                            <div className="KDA">
                                <span className="Kill">{kills}</span>&nbsp;/&nbsp;
                                <span className="Death">{deaths}</span>&nbsp;/&nbsp;
                                <span className="Assist">{assists}</span>
                            </div>
                            <div className="KDARatio">
                                <span className="KDARatio ">{KDA}</span> KDA
                            </div>
                            <div className="MultiKill">
                                <span className="Kill">双杀</span>
                            </div>
                        </div>
                        <div className="Stats">
                            <div className="Level">
                                等级{champLevel}
                            </div>
                            <div className="CS">
                                                                        <span className="CS tip"
                                                                              title="小兵击杀总数 213  + 野怪 17<br>每分钟CS8.8个">230 (8.8)</span> CS
                            </div>
                            <div className="CKRate tip" title="击杀贡献率">
                                击杀参与率 69%
                            </div>
                            <div className="MMR">Match MMR <b>1307</b></div>
                        </div>
                        <div className="Items">
                            <div className="ItemList">
                                {itemListNode}
                                <button className="Button OpenBuildButton tip"
                                        title="Builds" type="button">
                                    <img className="Off"
                                         src={win
                                             ? "//opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png"
                                             : "//opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png"}/>
                                </button>
                            </div>
                            <div className="Trinket">
                                <img
                                    src={win
                                        ? "//opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"
                                        : "//opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png"}/>
                                &nbsp;&nbsp;视野得分 <span
                                className="wards vision">{visionScore}</span></div>
                        </div>
                        <div className="FollowPlayers Names">
                            <div className="Team">
                                {team1SummonerListNode}
                            </div>
                            <div className="Team">
                                {team2SummonerListNode}
                            </div>
                        </div>
                        {/*<div className="StatsButton">*/}
                        {/*<div className="Content">*/}
                        {/*/!*<Button type="primary" style={{height: "100%", width: "100%"}}>对局详情</Button>*!/*/}

                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <Collapse accordion className="GameDetail">
                        <Panel header="对局详情" key="1" style={{border: 0}}>
                            <div className="GameItemDetail">
                                <Tabs onChange={callback} type="card">
                                    <TabPane tab="综观" key="1">Content of Tab Pane 1</TabPane>
                                    <TabPane tab="Team Analysis" key="2">Content of Tab Pane 2</TabPane>
                                    <TabPane tab="Builds" key="3">Content of Tab Pane 3</TabPane>
                                    <TabPane tab="etc" key="4">Content of Tab Pane 3</TabPane>
                                </Tabs>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default GameItem;