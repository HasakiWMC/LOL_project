import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import SummonerHeader from "./SummonerHeader";
import MostChampionTabs from './MostChampionTabs';
import SummonersMostGameBox from "./SummonersMostGameBox";
import GameList from "./GameList";

import {searchSummoner} from '../../actions/summonerActions';
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
            this.props.searchSummoner(newSummoner, this.props.history);
        } else {
            this.props.history.push("/summoner/inputErr");
        }
    }

    render() {
        const {loading} = this.props.summoner;

        let summonerDetailContent;

        const summonerDetail = (
            <div>
                <SummonerHeader profile={this.props.summoner}/>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="综合" key="1">
                        <div className="row">
                            <div className="col-md-4">
                                <ul className="list-group" style={{marginTop: "20px"}}>
                                    <li key="1" className="list-group-item">
                                        <h3 className="text-center text-info">段位图标胜场</h3>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                    <li key="2" className="list-group-item">
                                        <h3 className="text-center text-info">灵活组排信息</h3>
                                        <p>
                                            <span>排位图表信息
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                </ul>

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
                                            <GameList/>
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
                                            <GameList/>
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
                                            <GameList/>
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
            console.log(nextProps);
            console.log(this.props.summoner)
        }
    }
}

const mapStateToProps = state => ({
    summoner: state.summoner,
});

SummonerDetail.propTypes = {
    searchSummoner: PropTypes.func.isRequired,
    summoner: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {searchSummoner})(withRouter(SummonerDetail));