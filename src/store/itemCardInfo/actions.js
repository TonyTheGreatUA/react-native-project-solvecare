import { CallAPIService } from '../../services/CallAPIService';
import {
  ITEM_FORM_FIELD_FAILURE,
  ITEM_FORM_FIELD_REQUEST,
  ITEM_FORM_FIELD_SUCCESS,
  ITEM_IS_EDITED_REQUEST,
} from './types';

export const validateCreditCard = (items: any) => (dispatch: any) => {
  dispatch({ type: ITEM_FORM_FIELD_REQUEST });

  new CallAPIService()
    .callServerValidation(items)
    .then(data => {
      dispatch({ type: ITEM_FORM_FIELD_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ITEM_FORM_FIELD_FAILURE, err });
    });
};

export const updateItem = (
  title: string,
  weight: string,
  size: string,
  country: string,
  isEditable: boolean,
) => ({
  type: ITEM_IS_EDITED_REQUEST,
  payload: {
    title,
    weight,
    size,
    country,
    isEditable,
  },
});
