//@flow

import { RequestStatus } from '../../utils/RequestStatus';
import {
  ITEM_FORM_FIELD_FAILURE,
  ITEM_FORM_FIELD_REQUEST,
  ITEM_FORM_FIELD_SUCCESS,
  ITEM_IS_EDITED_REQUEST,
} from './types';

const defaultState = {
  title: '',
  weight: '',
  size: '',
  country: '',
  requestStatus: RequestStatus.Default,
  isEditable: true,
};

export const itemCardInfoReducer = (
  state: {
    title: string,
    weight: string,
    size: string,
    country: string,
    isEditable: boolean,
  } = defaultState,
  action: {
    type: string,
    payload: {
      title: string,
      weight: string,
      size: string,
      country: string,
      isEditable: boolean,
    },
  },
) => {
  switch (action.type) {
    case ITEM_FORM_FIELD_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      };
    case ITEM_FORM_FIELD_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
      };
    case ITEM_FORM_FIELD_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      };
    case ITEM_IS_EDITED_REQUEST:
      return {
        ...state,
        isEditable: action.payload,
      };
  }
  return state;
};
