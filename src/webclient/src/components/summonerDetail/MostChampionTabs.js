import React, {Component} from 'react';
import {connect} from 'react-redux';

import MostChampionItem from './MostChampionItem'

import '../../scss/summoner.scss'
import {Button, Tabs} from "antd";

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

class MostChampionTabs extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="季前赛" key="1">
                    <div className="MostChampionContent">
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                    </div>
                    <Button type="primary" block>Show More</Button>
                </TabPane>
                <TabPane tab="单独排位赛" key="2">
                    <div className="MostChampionContent">
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                    </div>
                </TabPane>
                <TabPane tab="灵活组排5v5" key="3">
                    <div className="MostChampionContent">
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                        <MostChampionItem/>
                    </div>
                </TabPane>
                <TabPane tab="灵活组排3v3" key="4">
                    <MostChampionItem/>
                    <MostChampionItem/>
                    <MostChampionItem/>
                    <MostChampionItem/>
                    <MostChampionItem/>
                    <MostChampionItem/>
                    <MostChampionItem/>
                </TabPane>
            </Tabs>
        )
    }
}

export default MostChampionTabs;