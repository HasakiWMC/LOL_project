import React, {Component} from 'react';
import {connect} from 'react-redux';

import GameItem from "./GameItem";

import '../../css/Summoner.css'


class GameList extends Component {
    render() {
        return (
            <div key="1" className="GameItemList">
                <GameItem/>
                <GameItem/>
                <GameItem/>
                <GameItem/>
                <GameItem/>
                <GameItem/>
            </div>
        )
    }
}

export default GameList;