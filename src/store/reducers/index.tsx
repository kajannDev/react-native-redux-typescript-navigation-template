import { combineReducers } from 'redux';
import { NavigatorReducer } from './NavigatorReducer';

export default combineReducers({
  tabBar: NavigatorReducer,
});