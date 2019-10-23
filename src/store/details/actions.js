/*eslint-disable*/
import { serverService } from '../../services/serverService';

export const SHOW_CARD_DETAILS_REQUEST = 'SHOW_CARD_DETAILS_REQUEST';
export const SHOW_CARD_DETAILS_FAILURE = 'SHOW_CARD_DETAILS_FAILURE';
export const SHOW_CARD_DETAILS_SUCCESS = 'SHOW_CARD_DETAILS_SUCCESS';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const showDetails = () => (dispatch, getState) => {
  dispatch({ type: SHOW_CARD_DETAILS_REQUEST });
  const state = getState();
  const items = state.form;

  new serverService()
    .callServerValidation(items)
    .then(data => {
      dispatch({ type: SHOW_CARD_DETAILS_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log('error', err);
      dispatch({ type: SHOW_CARD_DETAILS_FAILURE, err });
    });
};

export const onSubmit = isFormShown => ({
  type: SUBMIT_FORM,
  payload: isFormShown,
});
