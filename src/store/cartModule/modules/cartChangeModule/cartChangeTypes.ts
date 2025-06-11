import {IProduct} from '../../../productModule/modules/productsGetModule/productGetTypes';

export enum ECartChangeTypes {
  ADD_TO_CART = '@cart/ADD_TO_CART',
  ADD_TO_CART_ERROR = '@cart/ADD_TO_CART_ERROR',
  ADD_TO_CART_SUCCESS = '@cart/ADD_TO_CART_SUCCESS',
  REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART',
  REMOVE_FROM_CART_ERROR = '@cart/REMOVE_FROM_CART_ERROR',
  REMOVE_FROM_CART_SUCCESS = '@cart/REMOVE_FROM_CART_SUCCESS',
}

export interface IProductCart extends IProduct {
  quantity: number;
}

export interface ICartActions {
  type: ECartChangeTypes | string;
  payload?: any;
}

export interface ICartChangeReducer {
  product: IProduct;
  products: IProduct[];
  type?: 'ADD' | 'REMOVE';
}

export interface ICartState {
  cartPrice: number;
  cartProducts: IProduct[];
  loading: boolean;
  error: string;
  hasError: boolean;
}
