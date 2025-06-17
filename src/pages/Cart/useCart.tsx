import {useDispatch} from 'react-redux';
import {cartChangeActions} from '../../store/cartModule/modules/cartChangeModule/cartChangeActions';
import {IProductCart} from '../../store/cartModule/modules/cartChangeModule/cartChangeTypes';
import {IProduct} from '../../store/productModule/modules/productsGetModule/productGetTypes';
import {Alert} from 'react-native';

export const useCart = ({cartProducts}: {cartProducts: IProductCart[]}) => {
  const dispatch = useDispatch();

  const clickHandleItemToCart = ({
    product,
    type,
  }: {
    product: IProduct;
    type?: 'ADD' | 'REMOVE';
  }) => {
    dispatch(cartChangeActions.handleItemCart({product, cartProducts, type}));
  };

  const removeProductFromCart = (product: IProduct) => {
    Alert.alert('Atenção', 'Deseja remover o produto do carrinho?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          dispatch(
            cartChangeActions.removeProductFromCart({product, cartProducts}),
          );
        },
      },
    ]);
  };

  return {
    actions: {
      clickHandleItemToCart,
      removeProductFromCart,
    },
  };
};
