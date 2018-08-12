import { combineReducers } from 'redux';
// impoort **Reducer from './**Reducer';
import articleReducer from './articleReducer'; // 示例

// 将所有reducer组合
export default combineReducers({
    articleReducer
});
