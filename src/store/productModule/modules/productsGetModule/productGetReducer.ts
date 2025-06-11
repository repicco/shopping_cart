import {
  EProductGetTypes,
  IProductState,
  IProductActions,
} from './productGetTypes';

const INITIAL_STATE: IProductState = {
  products: [],
  loading: false,
  error: '',
  hasError: false,
};
export const productGetReducer = (
  state = INITIAL_STATE,
  action: IProductActions,
) => {
  switch (action.type) {
    case EProductGetTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        hasError: false,
      };
    case EProductGetTypes.GET_PRODUCTS_SUCCESS:
      console.info('ProductGetTypes.GET_PRODUCTS_SUCCESS');
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: '',
        hasError: false,
      };
    case EProductGetTypes.GET_PRODUCTS_FAILURE:
      console.info('ProductGetTypes.GET_PRODUCTS_FAILURE');
      return {
        ...state,
        error: action.payload,
        loading: false,
        hasError: true,
      };
    case EProductGetTypes.GET_PRODUCTS_SETLOADING:
      return {
        ...state,
        loading: false,
      };
    case EProductGetTypes.CHANGE_PRODUCTS_REQUEST:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
