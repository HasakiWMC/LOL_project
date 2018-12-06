import axios from 'axios';
import {GET_ERRORS, SET_SUMMONER_DETAIL, TO_SEARCH_SUMMONER} from "./types";


export const searchSummoner = (summonerData) => dispatch => {
    // 请求
    console.log(summonerData);
    axios.get("/api/searchSummoner", {
        params: {...summonerData}
    })
        .then(res => {
            console.log(res.data);
            dispatch(setSummonerDetail(res.data));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

export const setSummonerDetail = data => {
    return {
        type: SET_SUMMONER_DETAIL,
        payload: data
    }
};
