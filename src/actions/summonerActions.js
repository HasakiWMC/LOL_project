import axios from 'axios';
import {GET_ERRORS, SET_SUMMONER_DETAIL, SUMMONER_LOADING} from "./types";


export const searchSummoner = (summonerData) => dispatch => {
    // 请求
    dispatch(setSummonerLoading());
    axios.get("/api/searchSummoner", {
        params: {...summonerData}
    })
        .then(res => {
            console.log("后台返回数据：", res.data);
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

export const setSummonerLoading = () => {
    return {
        type: SUMMONER_LOADING
    };
};