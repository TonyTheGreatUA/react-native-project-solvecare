//@flow
/*eslint-disable*/
import { RequestStatus } from '../../utils/RequestStatus';

import {
  SHOW_CARD_DETAILS_FAILURE,
  SHOW_CARD_DETAILS_REQUEST,
  SHOW_CARD_DETAILS_SUCCESS,
  SUBMIT_CARD_DATA,
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
  isSubmitClicked: false,
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
    isSubmitClicked: boolean,
  } = defaultState,
  action: {
    type: string,
    payload: {
      creditCardNumber: string,
      cvv: string,
      expirationDate: string,
      firstName: string,
      lastName: string,
      secretQuestion: string,
      secretAnswer: string,
      isSubmitClicked: boolean,
    },
  },
) => {
  switch (action.type) {
    case SHOW_CARD_DETAILS_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      };
    case SHOW_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
      };
    case SHOW_CARD_DETAILS_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      };
    case SUBMIT_CARD_DATA:
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
};
