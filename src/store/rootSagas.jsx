import {all} from 'redux-saga/effects';
import {productModuleSagas} from './productModule/productModuleCombineSaga';

export default function* rootSagas() {
  yield all([...productModuleSagas]);
}
