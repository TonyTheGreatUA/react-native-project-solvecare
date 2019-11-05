import { CallAPIServiceItem } from '../../services/CallAPIServiceItem';
import {
  ITEM_DETAILS_FAILURE,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_IS_EDITED_REQUEST,
} from './types';

export const validateItem = (items: any) => (dispatch: any) => {
  dispatch({ type: ITEM_DETAILS_REQUEST });

  new CallAPIServiceItem()
    .callServerValidationItem(items)
    .then(data => {
      dispatch({ type: ITEM_DETAILS_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ITEM_DETAILS_FAILURE, err });
    });
};

export const updateItem = (
  title: string,
  weight: string,
  size: string,
  country: string,
  isCreated: boolean,
) => ({
  type: ITEM_IS_EDITED_REQUEST,
  payload: {
    title,
    weight,
    size,
    country,
    isCreated,
  },
});
