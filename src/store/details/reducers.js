import {
  SHOW_CARD_DETAILS_REQUEST,
  SHOW_CARD_DETAILS_SUCCESS,
  SHOW_CARD_DETAILS_FAILURE,
  SUBMIT_FORM,
} from './actions';

import {RequestStatus} from '../../utils/RequestStatus';

const initialValue = {
  requestStatus: RequestStatus.Default,
  isFormShown: false,
  isFormSubmited: false,
};

export const formDetails = (state = initialValue, action) => {
  switch (action.type) {
    case SHOW_CARD_DETAILS_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
        isFormSubmited: true,
        isFormShown: true,
      };
    case SHOW_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
        isFormSubmited: true,
        isFormShown: true,
      };
    case SHOW_CARD_DETAILS_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
        isFormSubmited: true,
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
