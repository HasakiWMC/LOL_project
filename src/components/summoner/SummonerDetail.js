import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchSummoner} from '../../actions/summonerActions';
import '../../App.css';
import {Tag, Tabs} from 'antd';

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
            this.props.searchSummoner(newSummoner);
        } else {
            this.props.history.push("/");
        }
    }

    render() {
        const {loading} = this.props.summoner;

        let summonerDetailContent;

        const summonerDetail = (
            <div>
                <div>
                    <Tag><strong>S8</strong> Master</Tag>
                </div>
                <div style={{display: "block", marginTop: "10px"}}>
                    {/*<div style={{*/}
                    {/*backgroundImage:"url('http://opgg-static.akamaized.net/images/borders2/challenger.png')",*/}
                    {/*width: "120px",*/}
                    {/*height:"120px"*/}
                    {/*}}/>*/}
                    <img alt="" src="http://opgg-static.akamaized.net/images/profile_icons/profileIcon6.jpg"
                         style={{display: "block", width: "100px", height: "100px", border: 0}}/>

                </div>
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
                                            <span>
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

                                <ul className="list-group" style={{marginTop: "20px"}}>
                                    <li key="2" className="list-group-item">
                                        <h3 className="text-center text-info">最近使用英雄</h3>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                </ul>

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

                                <ul className="list-group" style={{marginTop: "20px"}}>
                                    <li key="1" className="list-group-item">
                                        <h3 className="text-center text-info">最近和谁玩过（最近20场比赛）</h3>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-8">
                                <ul className="list-group" style={{marginTop: "20px"}}>
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

                                <ul className="list-group" style={{marginTop: "20px"}}>
                                    <li key="1" className="list-group-item">
                                        <h3 className="text-center text-info">排位比赛场次信息</h3>
                                        <p>
                                            <span>
                                                <strong>1111111111</strong>
                                            </span>
                                        </p>
                                    </li>
                                </ul>
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