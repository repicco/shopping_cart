import React from 'react';

import * as S from './styles';
import {IProduct} from '../../../store/productModule/modules/productsGetModule/productGetTypes';
import Icon from 'react-native-vector-icons/Feather';

interface IListItems {
  product: IProduct;
  handleAddItem: (product: IProduct) => void;
  handleRemoveItem: (product: IProduct) => void;
}

export const ListItems = ({
  product,
  handleAddItem,
  handleRemoveItem,
}: IListItems) => {
  return (
    <S.Container>
      <S.TextContent>
        <S.Title>{product.name}</S.Title>
        <S.Price>{product.totalPrice}</S.Price>
      </S.TextContent>

      <S.ButtonContainer>
        <S.RemoveProductButton onPress={() => handleRemoveItem(product)}>
          <Icon name="minus" size={20} color="#fff" />
        </S.RemoveProductButton>

        <S.Title>{product.quantity}</S.Title>

        <S.AddProductButton onPress={() => handleAddItem(product)}>
          <Icon name="plus" size={20} color="#fff" />
        </S.AddProductButton>
      </S.ButtonContainer>
    </S.Container>
  );
};
