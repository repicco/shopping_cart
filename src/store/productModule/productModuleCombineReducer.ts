import {combineReducers, Reducer} from 'redux';
import productGetReducer from './modules/productsGetModule/productGetReducer';
import {ProductState} from './modules/productsGetModule/productGetTypes';

const productsModuleReducer: Reducer<{productGetModule: ProductState}> =
  combineReducers({
    productGetModule: productGetReducer,
  });

export {productsModuleReducer};
