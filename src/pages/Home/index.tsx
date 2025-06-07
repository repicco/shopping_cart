import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useProduct} from './useProduct';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';

export const Home = () => {
  const {products, loading} = useSelector((state: any) => {
    return state.productsModuleReducer.productGetModule;
  });

  const {actions} = useProduct();

  if (loading) {
    return (
      <S.Container>
        <Text>Loading...</Text>
      </S.Container>
    );
  }

  if (!products) {
    return (
      <S.Container>
        <Text>Lista de produtos</Text>
        <Text>No data</Text>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Lista de produtos</S.Title>

        <TouchableOpacity onPress={() => actions.clickOpenCart()}>
          <Icon name="shopping-cart" size={30} />
        </TouchableOpacity>
      </S.HeaderContainer>

      {products.map((product: any) => {
        return <Text key={product.id}>{product.name}</Text>;
      })}
    </S.Container>
  );
};
