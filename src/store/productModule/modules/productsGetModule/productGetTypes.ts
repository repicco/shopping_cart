export enum ProductGetTypes {
  GET_PRODUCTS_REQUEST = '@product/GET_PRODUCT_REQUEST',
  GET_PRODUCTS_SUCCESS = '@product/GET_PRODUCT_SUCCESS',
  GET_PRODUCTS_FAILURE = '@product/GET_PRODUCT_FAILURE',
  GET_PRODUCTS_SETLOADING = '@product/GET_PRODUCT_SETLOADING',
}

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string;
  hasError: boolean;
}

export interface ProductActions {
  type: ProductGetTypes | string;
  payload?: any;
}
