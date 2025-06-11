import {put, takeLatest} from 'redux-saga/effects';
import {IProduct, EProductGetTypes} from './productGetTypes';

import {productGetRepository} from './productGetRepository';

export function* productGetSaga() {
  try {
    const products: IProduct[] = yield productGetRepository();

    yield put({
      type: EProductGetTypes.GET_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (error) {
    console.log({error});
    yield put({
      type: EProductGetTypes.GET_PRODUCTS_FAILURE,
      payload: error,
    });
  } finally {
    yield put({
      type: EProductGetTypes.GET_PRODUCTS_SETLOADING,
    });
  }
}

export const productGetSagas = [
  takeLatest(EProductGetTypes.GET_PRODUCTS_REQUEST, productGetSaga),
];
