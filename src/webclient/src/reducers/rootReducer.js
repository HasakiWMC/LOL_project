/** combineReducers
 *  将多个reducer合成一个大的 Reducer
 */
import {combineReducers} from 'redux';
import auth from './authReducer';
import errors from './errorReducer';
import summoner_detail from './summonerReducer';

export default combineReducers({
    auth,
    errors,
    summoner_detail,
})