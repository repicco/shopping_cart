import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {productGetActions} from '../../store/productModule/modules/productsGetModule/productGetActions';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../routes/stack.routes';

export const useProduct = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const clickOpenCart = () => {
    navigation.navigate('Cart');
  };

  useEffect(() => {
    dispatch(productGetActions.getProductRequest());
  }, [dispatch]);

  return {
    state: {},
    actions: {
      clickOpenCart,
    },
  };
};
