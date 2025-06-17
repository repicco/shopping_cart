import {IProduct} from '../../../productModule/modules/productsGetModule/productGetTypes';

export enum ECartChangeTypes {
  ADD_PRODUCT_TO_CART = '@cart/ADD_TO_CART',
  ADD_PRODUCT_TO_CART_ERROR = '@cart/ADD_TO_CART_ERROR',
  ADD_PRODUCT_TO_CART_SUCCESS = '@cart/ADD_TO_CART_SUCCESS',
  REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART',
  REMOVE_FROM_CART_ERROR = '@cart/REMOVE_FROM_CART_ERROR',
  REMOVE_FROM_CART_SUCCESS = '@cart/REMOVE_FROM_CART_SUCCESS',
  HANDLE_ITEM_CART = '@cart/ADD_ITEM_TO_CART',
  HANDLE_ITEM_CART_SUCCESS = '@cart/ADD_ITEM_TO_CART_SUCCESS',
  HANDLE_ITEM_CART_ERROR = '@cart/ADD_ITEM_TO_CART_ERROR',
}

export interface IProductCart extends IProduct {
  quantity: number;
  totalPrice: number;
}

export interface ICartActions {
  type: ECartChangeTypes | string;
  payload?: any;
}

export interface ICartChangeReducer {
  product: IProduct;
  cartProducts: IProductCart[];
  type?: 'ADD' | 'REMOVE';
}

export interface ICartState {
  cartPrice: number;
  cartProducts: IProduct[];
  loading: boolean;
  error: string;
  hasError: boolean;
}
