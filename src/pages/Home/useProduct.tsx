import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {productGetActions} from '../../store/productModule/modules/productsGetModule/productGetActions';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../routes/stack.routes';
import {cartChangeActions} from '../../store/cartModule/modules/cartChangeModule/cartChangeActions';
import {IProduct} from '../../store/productModule/modules/productsGetModule/productGetTypes';
import {IProductCart} from '../../store/cartModule/modules/cartChangeModule/cartChangeTypes';

export const useProduct = ({cartProducts}: {cartProducts: IProductCart[]}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const clickOpenCart = () => {
    navigation.navigate('Meu carrinho');
  };

  const clickAddProductToCart = (product: IProduct) => {
    /* Add ao carrinho 1 produto caso não tenha ou não faz nada. */
    dispatch(cartChangeActions.addProductToCart({product, cartProducts}));
  };

  const blockAddProductToCart = useCallback(
    (product: IProduct) => {
      return cartProducts.some(item => item.id === product.id);
    },
    [cartProducts],
  );

  useEffect(() => {
    dispatch(productGetActions.getProductRequest());
  }, [dispatch]);

  return {
    actions: {
      clickOpenCart,
      clickAddProductToCart,
      blockAddProductToCart,
    },
  };
};
