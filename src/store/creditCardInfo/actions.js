//@flow
/*eslint-disable*/
import { CallAPIService } from '../../services/CallAPIService';
import {
  FORM_CHANGE_CREDIT_CARD_NUMBER,
  FORM_CHANGE_CVV,
  FORM_CHANGE_EXPIRATION_DATE,
  FORM_CHANGE_FIRST_NAME,
  FORM_CHANGE_LAST_NAME,
  FORM_CHANGE_SECRET_ANSWER,
  FORM_CHANGE_SECRET_QUESTION,
  SHOW_CARD_DETAILS_FAILURE,
  SHOW_CARD_DETAILS_REQUEST,
  SHOW_CARD_DETAILS_SUCCESS,
  SUBMIT_FORM,
} from './types';

export const setCreditCardNumber = (creditCardNumber: string) => ({
  type: FORM_CHANGE_CREDIT_CARD_NUMBER,
  payload: creditCardNumber,
});

export const setCVV = (cvv: string) => ({
  type: FORM_CHANGE_CVV,
  payload: cvv,
});

export const setExpirationDate = (expirationDate: string) => ({
  type: FORM_CHANGE_EXPIRATION_DATE,
  payload: expirationDate,
});

export const setFirstName = (firstName: string) => ({
  type: FORM_CHANGE_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName: string) => ({
  type: FORM_CHANGE_LAST_NAME,
  payload: lastName,
});

export const setSecretQuestion = (secretQuestion: string) => ({
  type: FORM_CHANGE_SECRET_QUESTION,
  payload: secretQuestion,
});

export const setSecretAnswer = (secretAnswer: string) => ({
  type: FORM_CHANGE_SECRET_ANSWER,
  payload: secretAnswer,
});

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

export const submitCreditCardInfo = (isFormShown: boolean) => ({
  type: SUBMIT_FORM,
  payload: isFormShown,
});
