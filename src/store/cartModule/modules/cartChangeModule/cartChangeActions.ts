import {ECartChangeTypes, ICartChangeReducer} from './cartChangeTypes';

export const cartChangeActions = {
  addProductToCart: ({product, products}: ICartChangeReducer) => ({
    type: ECartChangeTypes.ADD_TO_CART,
    payload: {product, products},
  }),
  removeProductFromCart: ({product, products}: ICartChangeReducer) => ({
    type: ECartChangeTypes.REMOVE_FROM_CART,
    payload: {product, products},
  }),
};
