import {ECartChangeTypes, ICartChangeReducer} from './cartChangeTypes';

export const cartChangeActions = {
  addProductToCart: ({product, cartProducts}: ICartChangeReducer) => ({
    type: ECartChangeTypes.ADD_PRODUCT_TO_CART,
    payload: {product, cartProducts},
  }),
  removeProductFromCart: ({product, cartProducts}: ICartChangeReducer) => ({
    type: ECartChangeTypes.REMOVE_FROM_CART,
    payload: {product, cartProducts},
  }),
  handleItemCart: ({product, cartProducts, type}: ICartChangeReducer) => ({
    type: ECartChangeTypes.HANDLE_ITEM_CART,
    payload: {product, cartProducts, type},
  }),
};
