import React, {Component} from 'react';
import {connect} from 'react-redux';

import GameItem from "./GameItem";

import '../../css/Summoner.css'
import {PropTypes} from "prop-types";


class GameList extends Component {

    componentDidMount() {
        if (this.props.matches) {
            console.log("GameList接收数据：", this.props.matches);
        }
    }

    render() {
        const {matches} = this.props;
        return (
            <div key="1" className="GameItemList">
                {
                    matches.map(game =>
                        <GameItem key={game.gameId} game={game}/>
                    )
                }
            </div>
        )
    }
}

// GameList.propTypes = {
//     matches: PropTypes.array.isRequired,
// };


export default GameList;