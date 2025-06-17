import {ECartChangeTypes, ICartActions, ICartState} from './cartChangeTypes';

const INITIAL_STATE: ICartState = {
  cartPrice: 0,
  cartProducts: [],
  loading: false,
  error: '',
  hasError: false,
};

export const cartChangeReducer = (
  state = INITIAL_STATE,
  action: ICartActions,
) => {
  switch (action.type) {
    case ECartChangeTypes.ADD_PRODUCT_TO_CART:
      console.info('ECartChangeTypes.ADD_PRODUCT_TO_CART');
      return {
        ...state,
        loading: true,
        error: '',
        hasError: false,
      };
    case ECartChangeTypes.ADD_PRODUCT_TO_CART_SUCCESS:
      console.info('ECartChangeTypes.ADD_PRODUCT_TO_CART_SUCCESS');
      return {
        ...state,
        cartProducts: action.payload.cartProducts,
        cartPrice: action.payload.cartPrice,
        loading: false,
        error: '',
        hasError: false,
      };
    case ECartChangeTypes.ADD_PRODUCT_TO_CART_ERROR:
      console.info('ECartChangeTypes.ADD_PRODUCT_TO_CART_ERROR');
      return {
        ...state,
        error: action.payload,
        loading: false,
        hasError: true,
      };

    case ECartChangeTypes.REMOVE_FROM_CART:
      console.info('ECartChangeTypes.REMOVE_FROM_CART');
      return {
        ...state,
        loading: true,
        error: '',
        hasError: false,
      };
    case ECartChangeTypes.REMOVE_FROM_CART_SUCCESS:
      console.info('ECartChangeTypes.REMOVE_FROM_CART_SUCCESS');
      return {
        ...state,
        cartProducts: action.payload.cartProducts,
        cartPrice: action.payload.cartPrice,
        loading: false,
        error: '',
        hasError: false,
      };
    case ECartChangeTypes.REMOVE_FROM_CART_ERROR:
      console.info('ECartChangeTypes.REMOVE_FROM_CART_ERROR');
      return {
        ...state,
        error: action.payload,
        loading: false,
        hasError: true,
      };
    case ECartChangeTypes.HANDLE_ITEM_CART:
      console.info('ECartChangeTypes.HANDLE_ITEM_CART');
      return {
        ...state,
        loading: true,
        error: '',
        hasError: false,
      };
    case ECartChangeTypes.HANDLE_ITEM_CART_SUCCESS:
      console.info('ECartChangeTypes.HANDLE_ITEM_CART_SUCCESS');
      return {
        ...state,
        cartProducts: action.payload.cartProducts,
        cartPrice: action.payload.cartPrice,
        loading: false,
        error: '',
        hasError: false,
      };
    case ECartChangeTypes.HANDLE_ITEM_CART_ERROR:
      console.info('ECartChangeTypes.HANDLE_ITEM_CART_ERROR');
      return {
        ...state,
        error: action.payload,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
