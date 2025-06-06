import {ProductGetTypes, ProductState, ProductActions} from './productGetTypes';

const INITIAL_STATE: ProductState = {
  products: [],
  loading: false,
  error: '',
  hasError: false,
};
const productGetReducer = (state = INITIAL_STATE, action: ProductActions) => {
  switch (action.type) {
    case ProductGetTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        hasError: false,
      };
    case ProductGetTypes.GET_PRODUCTS_SUCCESS:
      console.info('ProductGetTypes.GET_PRODUCTS_SUCCESS');
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: '',
        hasError: false,
      };
    case ProductGetTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        hasError: true,
      };
    case ProductGetTypes.GET_PRODUCTS_SETLOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default productGetReducer;
