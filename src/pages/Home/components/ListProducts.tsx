import React from 'react';

import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {IProduct} from '../../../store/productModule/modules/productsGetModule/productGetTypes';

interface IListProducts {
  product: IProduct;
  handleAddProduct: (product: IProduct) => void;
}

export const ListProducts = ({product, handleAddProduct}: IListProducts) => {
  return (
    <S.Container>
      <S.TextContent>
        <S.Title>{product.name}</S.Title>
        <S.Price>{product.price}</S.Price>
      </S.TextContent>

      <S.TextContent>
        <S.Title>{product.quantity}</S.Title>
        <S.Price>{product.totalPrice}</S.Price>
      </S.TextContent>

      <S.AddProductButton onPress={() => handleAddProduct(product)}>
        <Icon name="plus" size={20} color="#fff" />
      </S.AddProductButton>
    </S.Container>
  );
};
