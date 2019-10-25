//@flow
/*eslint-disable*/
import { CallAPIService } from '../../services/CallAPIService';
import {
  SHOW_CARD_DETAILS_FAILURE,
  SHOW_CARD_DETAILS_REQUEST,
  SHOW_CARD_DETAILS_SUCCESS,
  SUBMIT_CARD_DATA,
} from './types';

export const validateCreditCard = () => (dispatch: any, getState: any) => {
  dispatch({ type: SHOW_CARD_DETAILS_REQUEST });
  const state = getState();
  const items = state.creditInfo;

  new CallAPIService()
    .callServerValidation(items)
    .then(data => {
      dispatch({ type: SHOW_CARD_DETAILS_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: SHOW_CARD_DETAILS_FAILURE, err });
    });
};

export const submitCreditCardInfo = (
  creditCardNumber: '',
  cvv: string,
  expirationDate: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  isSubmitClicked: boolean,
) => ({
  type: SUBMIT_CARD_DATA,
  payload: {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
    isSubmitClicked,
  },
});
