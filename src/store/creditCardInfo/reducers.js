//@flow
/*eslint-disable*/
import { RequestStatus } from '../../utils/RequestStatus';

import {
  FORM_CHANGE_CREDIT_CARD_NUMBER,
  FORM_CHANGE_CVV,
  FORM_CHANGE_EXPIRATION_DATE,
  FORM_CHANGE_FIRST_NAME,
  FORM_CHANGE_LAST_NAME,
  FORM_CHANGE_SECRET_QUESTION,
  FORM_CHANGE_SECRET_ANSWER,
  SHOW_CARD_DETAILS_FAILURE,
  SHOW_CARD_DETAILS_REQUEST,
  SHOW_CARD_DETAILS_SUCCESS,
  SUBMIT_FORM,
} from './types';

const defaultState = {
  creditCardNumber: '',
  cvv: '',
  expirationDate: '',
  firstName: '',
  lastName: '',
  secretQuestion: '',
  secretAnswer: '',
  requestStatus: RequestStatus.Default,
  isFormShown: false,
};

export const creditCardInfoReducer = (
  state: {
    creditCardNumber: string,
    cvv: string,
    expirationDate: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
    isFormShown: boolean,
  } = defaultState,
  action: {
    type: string,
    payload: {},
  },
) => {
  switch (action.type) {
    case FORM_CHANGE_CREDIT_CARD_NUMBER:
      return { ...state, creditCardNumber: action.payload };
    case FORM_CHANGE_CVV:
      return { ...state, cvv: action.payload };
    case FORM_CHANGE_EXPIRATION_DATE:
      return { ...state, expirationDate: action.payload };
    case FORM_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case FORM_CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload };
    case FORM_CHANGE_SECRET_QUESTION:
      return { ...state, secretQuestion: action.payload };
    case FORM_CHANGE_SECRET_ANSWER:
      return { ...state, secretAnswer: action.payload };
    case SHOW_CARD_DETAILS_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
        isFormShown: true,
      };
    case SHOW_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
        isFormShown: true,
      };
    case SHOW_CARD_DETAILS_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
        isFormShown: true,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        isFormShown: action.payload,
      };
  }
  return state;
};
