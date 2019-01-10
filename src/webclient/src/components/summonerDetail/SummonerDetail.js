import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import SummonerProfile from "./SummonerProfile";
import TierBox from "./TierBox";
import MostChampionTabs from './MostChampionTabs';
import SummonersMostGameBox from "./SummonersMostGameBox";
import GameList from "./GameList";
import * as summonerActions from '../../actions/summonerActions';

import {Tag, Tabs, Button, Spin, Table} from 'antd';
import '../../App.css';
import '../../css/Summoner.css';
import '../../css/Sprite.css';
import '../../css/Common.css';


const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

class SummonerDetail extends Component {
    componentDidMount() {
        if (this.props.match.params.region && this.props.match.params.summonerName) {
            const newSummoner = {
                "region": this.props.match.params.region,
                "summonerName": this.props.match.params.summonerName
            };
            this.props.summonerActions.searchSummoner(newSummoner, this.props.history);
        } else {
            this.props.history.push("/summoner_detail/inputErr");
        }
    }

    render() {
        const {loading} = this.props.summoner_detail;

        const profileProps = this.props.summoner_detail.summoner_profile || {};

        const tierProps = this.props.summoner_detail.summoner_tier || {};

        const matchesProps = this.props.summoner_detail.matches_detail || [];

        const accountId = profileProps ? profileProps.accountId : "";

        const summonerDetail = (
            <div>
                <SummonerProfile profile={profileProps}/>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="综合" key="1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="list-group" style={{marginTop: "20px"}}>
                                    <TierBox tier={tierProps}/>
                                </div>

                                <ul className="list-group" style={{marginTop: "20px"}}>
                                    <li key="1" className="list-group-item">
                                        <h3 className="text-center text-info">职业选手概况（如果有的话）</h3>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                </ul>

                                <div className="list-group" style={{marginTop: "20px"}}>
                                    <div key="2" className="list-group-item" style={{padding: 0}}>
                                        <MostChampionTabs/>
                                    </div>
                                </div>

                                <ul className="list-group" style={{marginTop: "20px"}}>
                                    <li key="1" className="list-group-item">
                                        <h3 className="text-center text-info">7日内排位胜率</h3>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                </ul>

                                <div className="list-group" style={{marginTop: "20px"}}>
                                    <SummonersMostGameBox/>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    <TabPane tab="全部" key="1">
                                        <ul className="list-group" style={{marginTop: "-17px"}}>
                                            <li key="1" className="list-group-item">
                                                <h3 className="text-center text-info">排位图表信息</h3>
                                                <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                                </p>
                                            </li>
                                        </ul>

                                        <ul className="list-group" style={{marginTop: "20px"}}>
                                            <li key="1" className="list-group-item">
                                                <h3 className="text-center text-info">提示信息</h3>
                                                <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                                </p>
                                            </li>
                                        </ul>

                                        <div style={{marginTop: "20px"}}>
                                            <GameList matches={matchesProps} accountId={accountId}/>
                                        </div>
                                    </TabPane>

                                    <TabPane tab="单独排位赛" key="2">
                                        <ul className="list-group" style={{marginTop: "-17px"}}>
                                            <li key="1" className="list-group-item">
                                                <h3 className="text-center text-info">排位图表信息</h3>
                                                <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                                </p>
                                            </li>
                                        </ul>

                                        <ul className="list-group" style={{marginTop: "20px"}}>
                                            <li key="1" className="list-group-item">
                                                <h3 className="text-center text-info">提示信息</h3>
                                                <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                                </p>
                                            </li>
                                        </ul>

                                        <div style={{marginTop: "20px"}}>
                                            <GameList matches={matchesProps.filter((match) => {
                                                return 420 === match.queueId
                                            })} accountId={accountId}/>
                                        </div>
                                    </TabPane>

                                    <TabPane tab="Ranked Flex" key="3">
                                        <ul className="list-group" style={{marginTop: "-17px"}}>
                                            <li key="1" className="list-group-item">
                                                <h3 className="text-center text-info">排位图表信息</h3>
                                                <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                                </p>
                                            </li>
                                        </ul>

                                        <ul className="list-group" style={{marginTop: "20px"}}>
                                            <li key="1" className="list-group-item">
                                                <h3 className="text-center text-info">提示信息</h3>
                                                <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                                </p>
                                            </li>
                                        </ul>

                                        <div style={{marginTop: "20px"}}>
                                            <GameList matches={matchesProps.filter((match) => {
                                                return 440 === match.queueId
                                            })} accountId={accountId}/>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="英雄" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="战区" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        );

        let summonerDetailContent;

        if (loading) {
            summonerDetailContent = (
                <div className="spin">
                    <Spin/>
                </div>
            )
        } else {
            summonerDetailContent = summonerDetail
        }


        return (
            <div>
                {summonerDetailContent}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
        }
    }
}

const mapStateToProps = state => ({
    summoner_detail: state.summoner_detail,
});

const mapDispatchToProps = dispatch => ({
    summonerActions: bindActionCreators(summonerActions, dispatch)
});

SummonerDetail.propTypes = {
    summonerActions: PropTypes.object.isRequired,
    summoner_detail: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SummonerDetail));