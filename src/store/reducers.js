/*eslint-disable*/
import {combineReducers} from 'redux';
import {formReducer} from './form/reducers';
import {formDetails} from './details/reducers';

export default combineReducers({
  form: formReducer,
  details: formDetails,
});
