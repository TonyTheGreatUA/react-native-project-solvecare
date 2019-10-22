/*eslint-disable*/
import {serverService} from '../../services/serverService';

export const SHOW_CARD_DETAILS_REQUEST = 'SHOW_CARD_DETAILS_REQUEST';
export const SHOW_CARD_DETAILS_FAILURE = 'SHOW_CARD_DETAILS_FAILURE';
export const SHOW_CARD_DETAILS_SUCCESS = 'SHOW_CARD_DETAILS_SUCCESS';

export const showDetails = () => (dispatch, getState) => {
  dispatch({type: SHOW_CARD_DETAILS_REQUEST});

  new serverService()
    .callServerValidation(input)
    .then(data => {
      dispatch({type: SHOW_CARD_DETAILS_SUCCESS, payload: data});
    })
    .catch(err => {
      dispatch({type: SHOW_CARD_DETAILS_FAILURE, err});
    });
};
