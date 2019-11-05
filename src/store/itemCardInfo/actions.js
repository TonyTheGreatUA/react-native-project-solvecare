import { CallAPIService } from '../../services/CallAPIService';
import { ITEM_IS_EDITED_REQUEST } from './types';

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
