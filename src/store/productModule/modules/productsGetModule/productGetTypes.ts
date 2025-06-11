export enum EProductGetTypes {
  GET_PRODUCTS_REQUEST = '@product/GET_PRODUCT_REQUEST',
  GET_PRODUCTS_SUCCESS = '@product/GET_PRODUCT_SUCCESS',
  GET_PRODUCTS_FAILURE = '@product/GET_PRODUCT_FAILURE',
  GET_PRODUCTS_SETLOADING = '@product/GET_PRODUCT_SETLOADING',
  CHANGE_PRODUCTS_REQUEST = '@product/CHANGE_PRODUCTS_REQUEST',
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface IProductActions {
  type: EProductGetTypes | string;
  payload?: any;
}

export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
  hasError: boolean;
}
