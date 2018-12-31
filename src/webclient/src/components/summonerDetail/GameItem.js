import React, {Component} from 'react';

import {Collapse, Tabs} from 'antd';

import {championId2Name} from "../../common/constant"
import '../../css/Summoner.css'
import '../../css/Common.css'

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

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


function callback(key) {
    console.log(key);
}


class GameItem extends Component {

    componentDidMount() {
        if (this.props.game) {
            console.log("Game接收game数据：", this.props.game);
        }
        if (this.props.accountId) {
            console.log("Game接收accountId数据：", this.props.accountId);
        }
        console.log(championId2Name[266]);
    }

    render() {
        const {
            gameCreation, gameDuration, gameId, gameMode, gameType, gameVersion, mapId, participantIdentities,
            participants, platformId, queueId, seasonId, teams
        } = this.props.game;


        return (
            <div className="GameItemWrap list-group-item"
                 style={{padding: 0, WebkitBorderBottomLeftRadius: "0.5em", WebkitBorderBottomRightRadius: "0.5em"}}>
                <div className="GameItem Win  " data-summoner-id="4460427"
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
                                胜利
                            </div>
                            <div className="GameLength">{parseGameDuration(gameDuration)}</div>

                        </div>
                        <div className="GameSettingInfo">
                            <div className="ChampionImage">
                                <a href="/champion/irelia/statistics"
                                   target="_blank"><img
                                    src="//opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=w_46&amp;v=15354684000"
                                    className="Image" alt="刀锋舞者"/></a>
                            </div>

                            <div className="SummonerSpell">
                                <div className="Spell">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=w_22&amp;v=15354684000"
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>引燃</b><br><span>引燃是对单体敌方目标施放的持续性伤害技能，在5秒的持续时间里造成80-505（取决于英雄等级）真实伤害，获得目标的视野，并减少目标所受的治疗和回复效果。</span>"
                                        alt="引燃"/>
                                </div>
                                <div className="Spell">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=w_22&amp;v=15354684000"
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>闪现</b><br><span>使英雄朝着你的指针所停的区域瞬间传送一小段距离。</span>"
                                        alt="闪现"/>
                                </div>
                            </div>
                            <div className="Runes">
                                <div className="Rune">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/perk/8010.png?image=w_22&amp;v=1"
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>征服者</b><br><span>在处于战斗状态4秒后，你对敌方英雄发起的第一次攻击将为你提供6 - 35攻击力，基于等级，持续3秒，在此期间将你对该英雄造成伤害值的20%转化为真实伤害。<br><br><rules>仅限近战：对敌方英雄造成伤害时可刷新这个增益效果。</rules></span>"
                                        alt="征服者"/>
                                </div>
                                <div className="Rune">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/perkStyle/8100.png?image=w_22&amp;v=2"
                                        className="Image tip"
                                        title="<b style='color: #ffc659'>主宰</b><br><span>爆发伤害并前往目标</span>"
                                        alt="主宰"/>
                                </div>
                            </div>
                            <div className="ChampionName">
                                <a href="/champion/irelia/statistics"
                                   target="_blank">刀锋舞者</a>
                            </div>
                        </div>
                        <div className="KDA">
                            <div className="KDA">
                                <span className="Kill">8</span> /
                                <span className="Death">2</span> /
                                <span className="Assist">3</span>
                            </div>
                            <div className="KDARatio">
                                <span className="KDARatio ">5.50:1</span> KDA
                            </div>
                            <div className="MultiKill">
                                <span className="Kill">双杀</span>
                            </div>
                        </div>
                        <div className="Stats">
                            <div className="Level">
                                等级15
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
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/2421.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>破损的秒表</b><br><span>升级为秒表</span><br><span><unique>唯一被动：</unique>目前是破损状态，但仍然可以用于升级。<br><br><rules>在打破一个【秒表】后，商店主人就只会卖给你【破损的秒表】了。</rules></span><br><span>Cost:</span> <span style='color: #ffc659'>600 (600)</span>"
                                        alt="破损的秒表"/>
                                </div>
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/2033.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>腐败药水</b><br><span>持续回复生命和法力并提升战斗力—可在商店填满充能</span><br><span><groupLimit>限持1种生命药水。</groupLimit><br><br><active>唯一主动：</active>消耗一层充能，以在12秒里持续回复共125生命值和75法力值，并在回复期间提供<font color='#FF8811'><u>腐败之触</u></font>。最多可持有3层充能，并且每当你造访商店时，都会将充能数填满。<br><br><font color='#FF8811'><u>腐败之触</u></font>伤害型技能和攻击会灼烧敌方英雄，在3秒里持续造成共<scaleLevel>15 - 30</scaleLevel>魔法伤害。(群体技能或持续伤害技能的附加伤害值减半。伤害值随英雄等级的增长而增长。)<br><br><rules>(【腐败药水】甚至可以在生命值和法力值已满时使用)</rules></span><br><span>Cost:</span> <span style='color: #ffc659'>500 (350)</span>"
                                        alt="腐败药水"/>
                                </div>
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/3111.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>水银之靴</b><br><span>提升移动速度并降低限制效果的时长</span><br><span><groupLimit>限购1个鞋类装备。</groupLimit><br><br><stats>+25魔法抗性</stats><br><br><unique>唯一被动—强化移动：</unique>+45移动速度<br><unique>唯一被动—韧性：</unique>受到的晕眩、减速、嘲讽、恐惧、沉默、致盲、变形和禁锢的持续时间减少30%。</span><br><span>Cost:</span> <span style='color: #ffc659'>1100 (350)</span>"
                                        alt="水银之靴"/>
                                </div>
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/3340.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>监视图腾（饰品）</b><br><span>周期性地放置一个侦查守卫</span><br><span><groupLimit>只能持有1个饰品。</groupLimit><br><br><active>主动：</active>消耗一层充能来放置1个隐形的<font color='#BBFFFF'>侦查守卫</font>，以监视一个区域，持续<scaleLevel>90 - 120</scaleLevel>秒。<br><br>每<scaleLevel>240到120</scaleLevel>秒储存一层充能，最多可持有2层。<br><br>守卫的持续时长和充能时间会逐步随着等级的提升而加强。<br><br><rules>(一个玩家最多只能在地图上同时放置3个<font color='#BBFFFF'>侦查守卫</font>。)</rules></span>"
                                        alt="监视图腾（饰品）"/>
                                </div>
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/3053.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>斯特拉克的挑战护手</b><br><span>提供抵抗大额爆发伤害的护盾</span><br><span><stats>+450生命值</stats><br><br><unique>唯一被动—巨人蛮力：</unique>提供相当于你50%基础攻击力的额外攻击力<br><unique>唯一被动—救主灵刃：</unique>在5秒内受到至少400到1800伤害(基于携带者的等级)时，获得一个护盾，护盾生命值相当于你75%的额外生命值。0.75秒后，护盾会在3秒里持续衰减(冷却时间：60秒)。<br><br><unlockedPassive>斯特拉克之怒：</unlockedPassive>当<i>救主灵刃</i>触发时，体型和力量获得增长，提供更大的体型，获得+30%韧性，持续8秒。</span><br><span>Cost:</span> <span style='color: #ffc659'>3200 (725)</span>"
                                        alt="斯特拉克的挑战护手"/>
                                </div>
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/3078.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>三相之力</b><br><span>成吨的伤害</span><br><span><stats>+250生命值<br><mana>+250法力</mana><br>+25攻击力<br>+40%攻击速度<br>+20%冷却缩减<br>+5%移动速度</stats><br><br><unique>唯一被动—狂暴：</unique>每次普通攻击后会获得20移动速度，持续2秒。每次击杀单位后，获得60移动速度（与前者不叠加）。这个移动速度加成对远程英雄减半。<br><unique>唯一被动—咒刃：</unique>施放技能后，下一次攻击会造成额外物理伤害，伤害值为基础攻击力的200%（冷却时间：1.5秒）。</span><br><span>Cost:</span> <span style='color: #ffc659'>3733 (333)</span>"
                                        alt="三相之力"/>
                                </div>
                                <div className="Item">
                                    <img
                                        src="//opgg-static.akamaized.net/images/lol/item/1031.png?image=w_22&amp;v=15367644000"
                                        className="Image tip"
                                        title="<b style='color: #00cfbc'>锁子甲</b><br><span>显著提升护甲</span><br><span><stats>+40护甲</stats></span><br><span>Cost:</span> <span style='color: #ffc659'>800 (500)</span>"
                                        alt="锁子甲"/>
                                </div>
                                <button className="Button OpenBuildButton tip"
                                        title="Builds" type="button">
                                    <img className="On"
                                         src="//opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png"/>
                                    <img className="Off"
                                         src="//opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png"/>
                                </button>
                            </div>
                            <div className="Trinket">
                                <img
                                    src="//opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"/>
                                Control Ward <span
                                className="wards vision">5</span></div>
                        </div>
                        <div className="FollowPlayers Names">
                            <div className="Team">
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-43 tip"
                                            title="武器大师">武器大师
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-43 tip"
                                            title="武器大师">武器大师
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=topgotop"
                                           className="Link"
                                           target="_blank">TopGoTop</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-79 tip"
                                            title="狂野女猎手">狂野女猎手
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-79 tip"
                                            title="狂野女猎手">狂野女猎手
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=so1o"
                                           className="Link"
                                           target="_blank">So1o</a>
                                    </div>
                                </div>
                                <div className="Summoner Requester">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-39 tip"
                                            title="刀锋舞者">刀锋舞者
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-39 tip"
                                            title="刀锋舞者">刀锋舞者
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=hideonbush"
                                           className="Link" target="_blank">Hide
                                            on bush</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-85 tip"
                                            title="战争之王">战争之王
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-85 tip"
                                            title="战争之王">战争之王
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=%EC%B2%9C%EC%9E%AC"
                                           className="Link" target="_blank">천
                                            재</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-114 tip"
                                            title="魂锁典狱长">魂锁典狱长
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-114 tip"
                                            title="魂锁典狱长">魂锁典狱长
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=only60ping"
                                           className="Link"
                                           target="_blank">only60ping</a>
                                    </div>
                                </div>
                            </div>
                            <div className="Team">
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-0 tip"
                                            title="暗裔剑魔">暗裔剑魔
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-0 tip"
                                            title="暗裔剑魔">暗裔剑魔
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=esruc"
                                           className="Link" target="_blank">E S
                                            R U C</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-56 tip"
                                            title="虚空掠夺者">虚空掠夺者
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-56 tip"
                                            title="虚空掠夺者">虚空掠夺者
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=venomy"
                                           className="Link" target="_blank">Venom
                                            Y</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-60 tip"
                                            title="诡术妖姬">诡术妖姬
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-60 tip"
                                            title="诡术妖姬">诡术妖姬
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=%EC%B8%A0%EC%BF%A0%ED%8C%8C%EC%9D%B4"
                                           className="Link"
                                           target="_blank">츠쿠파이</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-127 tip"
                                            title="机械先驱">机械先驱
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-127 tip"
                                            title="机械先驱">机械先驱
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=nekol"
                                           className="Link"
                                           target="_blank">NekoL</a>
                                    </div>
                                </div>
                                <div className="Summoner ">
                                    <div className="ChampionImage">
                                        <div
                                            className="Image16 __sprite __spc16 __spc16-74 tip"
                                            title="堕落天使">堕落天使
                                        </div>
                                        <div
                                            className="Image20 __sprite __spc20 __spc20-74 tip"
                                            title="堕落天使">堕落天使
                                        </div>
                                    </div>
                                    <div className="SummonerName">
                                        <a href="//www.op.gg/summoner/userName=%ED%98%B8%EC%9E%87%EC%9D%B4"
                                           className="Link"
                                           target="_blank">호잇이</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="StatsButton">*/}
                        {/*<div className="Content">*/}
                        {/*/!*<Button type="primary" style={{height: "100%", width: "100%"}}>对局详情</Button>*!/*/}

                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <Collapse accordion style={{
                        backgroundColor: "#64B1E4", border: 0, borderTopLeftRadius: 0,
                        borderTopRightRadius: 0
                    }}>
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