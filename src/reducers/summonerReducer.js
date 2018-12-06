import {SET_SUMMONER_DETAIL} from '../actions/types';

const initialState = {
    summoner: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_SUMMONER_DETAIL:
            return {
                ...state,
                summoner: action.payload
            };
        default:
            return state;
    }
}