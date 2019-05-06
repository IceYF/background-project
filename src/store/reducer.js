// 主 reducer
import { combineReducers } from 'redux';
// 引入 其他子 reducer
import combineReducer from '../component/store/reducer';

export default combineReducers({
  common: combineReducer
})