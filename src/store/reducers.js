//@flow
/*eslint-disable*/
import { combineReducers } from 'redux';
import { creditCardInfoReducer } from './creditCardInfo/reducers';
import { itemCardInfoReducer } from './itemCardInfo/reducers';

export default combineReducers({
  creditInfo: creditCardInfoReducer,
  itemInfo: itemCardInfoReducer,
});
