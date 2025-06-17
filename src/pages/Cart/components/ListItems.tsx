import React, {useMemo} from 'react';

import * as S from './styles';

import Icon from 'react-native-vector-icons/Feather';
import {IProductCart} from '../../../store/cartModule/modules/cartChangeModule/cartChangeTypes';
import {formatToBRL} from '../../../utils/formatters';

interface IListItems {
  product: IProductCart;
  handleAddItem: (product: IProductCart) => void;
  handleRemoveItem: (product: IProductCart) => void;
  removeProductFromCart: (product: IProductCart) => void;
}

export const ListItems = ({
  product,
  handleAddItem,
  handleRemoveItem,
  removeProductFromCart,
}: IListItems) => {
  const disableMinusBtn = useMemo(() => {
    return product.quantity === 1;
  }, [product.quantity]);

  return (
    <S.Container>
      <S.LeftContent>
        <S.TextContent>
          <S.Title>{product.name}</S.Title>
          <S.Price>{formatToBRL(product.totalPrice)}</S.Price>
        </S.TextContent>

        <S.ButtonContainer>
          <S.RemoveItemButton
            onPress={() => handleRemoveItem(product)}
            disabled={disableMinusBtn}
            disabledStyle={disableMinusBtn}>
            <Icon name="minus" size={20} color="#fff" />
          </S.RemoveItemButton>

          <S.Title>{product.quantity}</S.Title>

          <S.AddItemButton onPress={() => handleAddItem(product)}>
            <Icon name="plus" size={20} color="#fff" />
          </S.AddItemButton>
        </S.ButtonContainer>
      </S.LeftContent>

      <S.RightContent>
        <S.RemoveProductButton onPress={() => removeProductFromCart(product)}>
          <Icon name="trash" size={20} color="#000" />
        </S.RemoveProductButton>
      </S.RightContent>
    </S.Container>
  );
};
