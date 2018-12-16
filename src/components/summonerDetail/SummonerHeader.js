import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import '../../css/Summoner.css'
import {Tag, Button} from "antd";


class SummonerHeader extends Component {
    state = {
        iconLoading: false,
        name: "",
        profileIconId: 0,
        summonerLevel: 0
    };


    enterIconLoading = () => {
        this.setState({iconLoading: true});
    };

    componentDidMount() {
        if (this.props.profile && this.props.profile.summoner && this.props.profile.summoner.data &&
            this.props.profile.summoner.data.summoner_header) {
            console.log(this.props.profile.summoner.data.summoner_header);
            this.setState({
                name: this.props.profile.summoner.data.summoner_header.name,
                profileIconId: this.props.profile.summoner.data.summoner_header.profileIconId,
                summonerLevel: this.props.profile.summoner.data.summoner_header.summonerLevel,
            });
            // setState本身需要一点时间，如果不加延时，打印的this.state是还没setState完之前的
            // setTimeout(() => {
            //     console.log(this.state)
            // }, 1000);

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            console.log(nextProps)
        }
    }

    render() {
        const profileIconSrc =
            `//opgg-static.akamaized.net/images/profile_icons/profileIcon${this.state.profileIconId}.jpg`;

        return (
            <div className="SummonerHeader">
                <div>
                    <Tag><strong>S3</strong> Diamond</Tag>
                    <Tag><strong>S4</strong> Challenger</Tag>
                    <Tag><strong>S5</strong> Diamond</Tag>
                    <Tag><strong>S6</strong> Diamond</Tag>
                    <Tag><strong>S7</strong> Diamond</Tag>
                    <Tag><strong>S8</strong> Master</Tag>
                </div>
                <div className="Face">
                    <div className="ProfileIcon">
                        {/*<div className="borderImage"/>*/}
                        <img src={profileIconSrc}
                             className="ProfileImage"/>
                        <span className="Level tip tpd-delegation-uid-1" title="">{this.state.summonerLevel}</span>
                    </div>
                </div>

                <div className="Profile">
                    <div className="Information">
                        <div className="Team">
                            SK Telecom T1
                            <span className="Name">[Faker]</span>
                        </div>
                        <span className="Name">{this.state.name}</span>

                        <div className="Rank">
                            <div className="LadderRank">
                                <a href="/ranking/ladder/summonerName=Hide%20on%20bush" className="tip Link"
                                   title="查看他在排行榜的位置" target="_blank">
                                    排位排行第<span className="ranking">114</span>位 (前0.0032%)
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Buttons">
                        <Button type="primary" size="large" loading={this.state.iconLoading}
                                onClick={this.enterIconLoading}>
                            更新
                        </Button>
                        <Button type="primary" size="large" style={{marginLeft: "8px"}}>Solo
                            MMR</Button>
                        <Button size="large" style={{marginLeft: "8px"}}>段位趋势图</Button>
                    </div>

                    <div className="LastUpdate">
                        最近更新：<span className="_timeago _timeCountAssigned tip tpd-delegation-uid-1"
                                   data-datetime="1544935069" data-type="" data-interval="60"
                                   title="2018年12月16日下午12点37">1小时前</span>
                    </div>
                </div>
            </div>
        )
    }
}

SummonerHeader.propTypes = {
    profile: PropTypes.object.isRequired
};

export default SummonerHeader;