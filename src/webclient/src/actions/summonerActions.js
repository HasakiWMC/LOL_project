import axios from 'axios';
import {GET_ERRORS, SET_SUMMONER_DETAIL, SUMMONER_LOADING, SET_SUMMONER_INPUT_ERR} from "./types";


export const searchSummoner = (summonerData, history) => dispatch => {
    // 请求
    dispatch(setSummonerLoading());
    axios.get("/api/searchSummoner", {
        params: {...summonerData}
    })
        .then(res => {
            console.log("后台返回数据：", res.data);
            if (res.data["retCode"] === 0) {
                dispatch(setSummonerDetail(res.data));
            } else {
                dispatch(setSummonerInputErr());
                history.push("/summoner/inputErr")

            }
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

export const setSummonerInputErr = () => {
    return {
        type: SET_SUMMONER_INPUT_ERR
    }
};

export const setSummonerLoading = () => {
    return {
        type: SUMMONER_LOADING
    };
};