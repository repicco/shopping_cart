import {combineReducers} from 'redux';

import {productsModuleReducer} from './productModule/productModuleCombineReducer';
import cartModuleReducer from './cartModule/cartModuleCombineReducer';

export default combineReducers({
  productsModuleReducer,
  cartModuleReducer,
});
