//@flow
/*eslint-disable*/
import { combineReducers } from 'redux';
import { creditCardInfoReducer } from './creditCardInfo/reducers';

export default combineReducers({
  creditInfo: creditCardInfoReducer,
});
