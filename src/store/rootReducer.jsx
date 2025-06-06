import {combineReducers} from 'redux';

import {productsModuleReducer} from './productModule/productModuleCombineReducer';

export default combineReducers({
  productsModuleReducer,
});
