//@flow

import { CallAPIService } from '../../services/CallAPIService';
import {
  SHOW_CARD_DETAILS_FAILURE,
  SHOW_CARD_DETAILS_REQUEST,
  SHOW_CARD_DETAILS_SUCCESS,
  SUBMIT_CARD_DATA,
} from './types';

export const validateCreditCard = (items: any) => (dispatch: any) => {
  dispatch({ type: SHOW_CARD_DETAILS_REQUEST });

  new CallAPIService()
    .callServerValidation(items)
    .then(data => {
      dispatch({ type: SHOW_CARD_DETAILS_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SHOW_CARD_DETAILS_FAILURE, err });
    });
};

export const submitCreditCardInfo = (
  creditCardNumber: string,
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
