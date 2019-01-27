import React, {Component} from 'react';
import {connect} from 'react-redux';

import GameItem from "./GameItem";

import '../../scss/summoner.scss'
import {PropTypes} from "prop-types";


class GameList extends Component {

    componentDidMount() {
        if (this.props.matches) {
            console.log("GameList接收matches数据：", this.props.matches);
        }
        if (this.props.accountId) {
            console.log("GameList接收accountId数据：", this.props.accountId);
        }
    }

    render() {
        const {matches, accountId} = this.props;
        return (
            <div key="1" className="GameItemList">
                {
                    matches.map(game =>
                        <GameItem key={game.gameId} game={game} accountId={accountId}/>
                    )
                }
            </div>
        )
    }
}

// GameList.propTypes = {
//     matches: PropTypes.array.isRequired,
//     accountId: PropTypes.string.isRequired,
// };


export default GameList;