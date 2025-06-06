import {put, takeLatest} from 'redux-saga/effects';
import {Product, ProductGetTypes} from './productGetTypes';

import {productGetRepository} from './productGetRepository';

export function* productGetSaga() {
  try {
    const products: Product[] = yield productGetRepository();

    yield put({
      type: ProductGetTypes.GET_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (error) {
    console.log({error});
    yield put({
      type: ProductGetTypes.GET_PRODUCTS_FAILURE,
      payload: error,
    });
  } finally {
    yield put({
      type: ProductGetTypes.GET_PRODUCTS_SETLOADING,
    });
  }
}

const productGetSagas = [
  takeLatest(ProductGetTypes.GET_PRODUCTS_REQUEST, productGetSaga),
];

export default productGetSagas;
