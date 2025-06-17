import React from 'react';
import * as S from './styles';
import {useSelector} from 'react-redux';
import {FlatList, Text} from 'react-native';
import {ListItems} from './components/ListItems';
import {useCart} from './useCart';
import {formatToBRL} from '../../utils/formatters';

export const Cart = () => {
  const {cartProducts, cartPrice, loading} = useSelector((state: any) => {
    return state.cartModuleReducer.cartChangeModule;
  });

  const {actions} = useCart({cartProducts});
  const {clickHandleItemToCart, removeProductFromCart} = actions;

  if (loading) {
    return (
      <S.Container>
        <Text>Loading...</Text>
      </S.Container>
    );
  }

  if (!cartProducts.length) {
    return (
      <S.Container>
        <Text>Sem produtos</Text>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <FlatList
        data={cartProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItems
            product={item}
            handleRemoveItem={() =>
              clickHandleItemToCart({product: item, type: 'REMOVE'})
            }
            handleAddItem={() =>
              clickHandleItemToCart({product: item, type: 'ADD'})
            }
            removeProductFromCart={removeProductFromCart}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <S.TotalContainer>
        <S.TotalText>Total:</S.TotalText>
        <S.TotalText>{formatToBRL(cartPrice)}</S.TotalText>
      </S.TotalContainer>
    </S.Container>
  );
};
