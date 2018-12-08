import {SET_SUMMONER_DETAIL, SUMMONER_LOADING} from '../actions/types';

const initialState = {
    summoner: {},
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_SUMMONER_DETAIL:
            return {
                ...state,
                summoner: action.payload,
                loading: false
            };
        case SUMMONER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}