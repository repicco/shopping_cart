import {combineReducers, Reducer} from 'redux';
import {productGetReducer} from './modules/productsGetModule/productGetReducer';
import {IProductState} from './modules/productsGetModule/productGetTypes';

const productsModuleReducer: Reducer<{productGetModule: IProductState}> =
  combineReducers({
    productGetModule: productGetReducer,
  });

export {productsModuleReducer};
