import {ProductGetTypes} from './productGetTypes';

export const productGetActions = {
  getProductRequest: () => ({
    type: ProductGetTypes.GET_PRODUCTS_REQUEST,
  }),
};
