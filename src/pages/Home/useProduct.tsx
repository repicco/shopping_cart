import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {productGetActions} from '../../store/productModule/modules/productsGetModule/productGetActions';

export const useProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productGetActions.getProductRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    state: {},
    actions: {},
  };
};
