import {SET_SUMMONER_DETAIL, SET_SUMMONER_INPUT_ERR, SUMMONER_LOADING} from '../actions/types';

const initialState = {
    summoner_detail: {},
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_SUMMONER_DETAIL:
            return {
                ...state,
                summoner_detail: action.payload,
                loading: false
            };
        case SUMMONER_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_SUMMONER_INPUT_ERR:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}