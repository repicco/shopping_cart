import {EProductGetTypes, IProduct} from './productGetTypes';

export const productGetActions = {
  getProductRequest: () => ({
    type: EProductGetTypes.GET_PRODUCTS_REQUEST,
  }),
  changeProductsRequest: (products: IProduct[]) => ({
    type: EProductGetTypes.CHANGE_PRODUCTS_REQUEST,
    payload: products,
  }),
};
