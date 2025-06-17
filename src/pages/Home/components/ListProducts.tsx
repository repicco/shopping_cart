import React from 'react';

import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {IProduct} from '../../../store/productModule/modules/productsGetModule/productGetTypes';
import {formatToBRL} from '../../../utils/formatters';

interface IListProducts {
  product: IProduct;
  handleAddProductToCart: (product: IProduct) => void;
  blockAddProductToCart: (product: IProduct) => boolean;
}

export const ListProducts = ({
  product,
  handleAddProductToCart,
  blockAddProductToCart,
}: IListProducts) => {
  return (
    <S.Container>
      <S.TextContent>
        <S.Title>{product.name}</S.Title>
        <S.Price>{formatToBRL(product.price)}</S.Price>
      </S.TextContent>
      k
      <S.AddProductButton
        onPress={() => handleAddProductToCart(product)}
        disabled={blockAddProductToCart(product)}
        disabledStyle={blockAddProductToCart(product)}>
        <Icon name="plus" size={20} color="#fff" />
      </S.AddProductButton>
    </S.Container>
  );
};
