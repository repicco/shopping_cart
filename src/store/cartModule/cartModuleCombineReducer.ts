import {combineReducers, Reducer} from 'redux';

import {cartChangeReducer} from './modules/cartChangeModule/cartChangeReducer';
import {ICartState} from './modules/cartChangeModule/cartChangeTypes';

export const cartModuleReducer: Reducer<{cartChangeModule: ICartState}> =
  combineReducers({
    cartChangeModule: cartChangeReducer,
  });

export default cartModuleReducer;
