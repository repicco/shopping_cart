import {put, takeLatest} from 'redux-saga/effects';
import {ECartChangeTypes, ICartActions, IProductCart} from './cartChangeTypes';
import {
  cartAddProductRepository,
  cartCountItemRepository,
  cartRemoveProductRepository,
} from './cartChangeRepository';

export function* cartAddProductSaga(action: ICartActions) {
  try {
    const cartProducts: IProductCart[] = yield cartAddProductRepository({
      product: action.payload.product,
      cartProducts: action.payload.cartProducts,
    });

    const cartPrice = cartProducts.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);

    yield put({
      type: ECartChangeTypes.ADD_PRODUCT_TO_CART_SUCCESS,
      payload: {cartProducts, cartPrice},
    });
  } catch (error) {
    console.log({error});
    yield put({
      type: ECartChangeTypes.ADD_PRODUCT_TO_CART_ERROR,
      payload: error,
    });
  }
}

export function* cartRemoveProductSaga(action: ICartActions) {
  try {
    const cartProducts: IProductCart[] = yield cartRemoveProductRepository({
      product: action.payload.product,
      cartProducts: action.payload.cartProducts,
    });

    const cartPrice = cartProducts.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);

    yield put({
      type: ECartChangeTypes.REMOVE_FROM_CART_SUCCESS,
      payload: {cartProducts, cartPrice},
    });
  } catch (error) {
    console.log({error});
    yield put({
      type: ECartChangeTypes.REMOVE_FROM_CART_ERROR,
      payload: error,
    });
  }
}

export function* cartCountItemSaga(action: ICartActions) {
  try {
    const cartProducts: IProductCart[] = yield cartCountItemRepository({
      product: action.payload.product,
      cartProducts: action.payload.cartProducts,
      type: action.payload.type,
    });

    const cartPrice = cartProducts.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);

    yield put({
      type: ECartChangeTypes.HANDLE_ITEM_CART_SUCCESS,
      payload: {cartProducts, cartPrice},
    });
  } catch (error) {
    console.log({error});
    yield put({
      type: ECartChangeTypes.HANDLE_ITEM_CART_ERROR,
      payload: error,
    });
  }
}

export const cartChangeSagas = [
  takeLatest(ECartChangeTypes.ADD_PRODUCT_TO_CART, cartAddProductSaga),
  takeLatest(ECartChangeTypes.HANDLE_ITEM_CART, cartCountItemSaga),
  takeLatest(ECartChangeTypes.REMOVE_FROM_CART, cartRemoveProductSaga),
];
