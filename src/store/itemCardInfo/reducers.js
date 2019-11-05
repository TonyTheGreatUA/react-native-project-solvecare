//@flow

import { RequestStatus } from '../../utils/RequestStatus';
import {
  ITEM_DETAILS_FAILURE,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_IS_EDITED_REQUEST,
} from './types';

const defaultState = {
  title: '',
  weight: '',
  size: '',
  country: 'UA',
  requestStatus: RequestStatus.Default,
  isCreated: false,
};

export const itemCardInfoReducer = (
  state: {
    title: string,
    weight: string,
    size: string,
    country: string,
    isCreated: boolean,
  } = defaultState,
  action: {
    type: string,
    payload: {
      title: string,
      weight: string,
      size: string,
      country: string,
      isCreated: boolean,
    },
  },
) => {
  switch (action.type) {
    case ITEM_DETAILS_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      };
    case ITEM_DETAILS_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
      };
    case ITEM_DETAILS_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      };
    case ITEM_IS_EDITED_REQUEST:
      return {
        ...state,
        isCreated: action.payload,
      };
  }
  return state;
};
