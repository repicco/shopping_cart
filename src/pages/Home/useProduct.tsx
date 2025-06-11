import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {productGetActions} from '../../store/productModule/modules/productsGetModule/productGetActions';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../routes/stack.routes';
import {cartChangeActions} from '../../store/cartModule/modules/cartChangeModule/cartChangeActions';
import {IProduct} from '../../store/productModule/modules/productsGetModule/productGetTypes';

export const useProduct = ({products}: {products: IProduct[]}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const clickOpenCart = () => {
    navigation.navigate('Meu carrinho');
  };

  const clickAddProduct = (product: IProduct) => {
    /* Add ao carrinho 1 produto caso não tenha ou não faz nada. */
    dispatch(cartChangeActions.addProductToCart({product, products}));
  };

  useEffect(() => {
    dispatch(productGetActions.getProductRequest());
  }, [dispatch]);

  return {
    state: {},
    actions: {
      clickOpenCart,
      clickAddProduct,
    },
  };
};
