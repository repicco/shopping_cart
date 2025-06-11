import {put, takeLatest} from 'redux-saga/effects';
import {ECartChangeTypes, ICartActions} from './cartChangeTypes';
import {cartChangeRepository} from './cartChangeRepository';
import {
  EProductGetTypes,
  IProduct,
} from '../../../productModule/modules/productsGetModule/productGetTypes';

export function* cartAddSaga(action: ICartActions) {
  try {
    const product: IProduct = yield cartChangeRepository({
      product: action.payload.product,
      products: action.payload.products,
      type: 'ADD',
    });

    yield put({
      type: EProductGetTypes.CHANGE_PRODUCTS_REQUEST,
      payload: product,
    });
  } catch (error) {
    console.log({error});
    yield put({
      type: ECartChangeTypes.ADD_TO_CART_ERROR,
      payload: error,
    });
  }
}

export const cartChangeSagas = [
  takeLatest(ECartChangeTypes.ADD_TO_CART, cartAddSaga),
];
