import {all} from 'redux-saga/effects';
import {productModuleSagas} from './productModule/productModuleCombineSaga';
import {cartModuleSagas} from './cartModule/cartModuleCombineSaga';

export default function* rootSagas() {
  yield all([...productModuleSagas, ...cartModuleSagas]);
}
