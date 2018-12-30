import React, {Component} from 'react';
import {connect} from 'react-redux';


import '../../css/Summoner.css'
import {Table} from "antd";

const columns = [{
    title: '召唤师',
    dataIndex: 'summoner_detail',
    sorter: (a, b) => a.summoner_detail.length - b.summoner_detail.length,
}, {
    title: '游戏',
    dataIndex: 'game',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.game - b.game,
}, {
    title: '胜利',
    dataIndex: 'victory',
    sorter: (a, b) => a.victory - b.victory,
}, {
    title: '败',
    dataIndex: 'defeat',
    sorter: (a, b) => a.defeat - b.defeat,
}, {
    title: '胜率',
    dataIndex: 'winRate',
    sorter: (a, b) => {
        let a_int = parseInt(a.winRate.split("%")[0]);
        let b_int = parseInt(b.winRate.split("%")[0]);
        return a_int - b_int;
    }
}];

const data = [{
    key: '1',
    summoner_detail: 'TOPMAIN',
    game: 2,
    victory: 2,
    defeat: 0,
    winRate: "100%",
}, {
    key: '2',
    summoner_detail: 'DWG Nuguri',
    game: 2,
    victory: 0,
    defeat: 2,
    winRate: "0%",
}, {
    key: '3',
    summoner_detail: 'SKT T1 Kuri',
    game: 3,
    victory: 3,
    defeat: 0,
    winRate: "100%",
}, {
    key: '4',
    summoner_detail: 'LPL noob ad',
    game: 3,
    victory: 2,
    defeat: 1,
    winRate: "67%",
}, {
    key: '5',
    summoner_detail: 'SKT T1 Cr',
    game: 2,
    victory: 1,
    defeat: 1,
    winRate: "50%",
}];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

class SummonersMostGameBox extends Component {
    render() {
        return (
            <div>
                <div className="list-group-item Title">
                    最近和谁玩过（最近20场比赛）
                </div>
                <div className="list-group-item" style={{padding: 0, borderBottom: 0}}>
                    <Table columns={columns} dataSource={data} onChange={onChange}
                           pagination={false}/>
                </div>
            </div>
        )
    }
}

export default SummonersMostGameBox;