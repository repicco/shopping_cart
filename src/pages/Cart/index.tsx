import React from 'react';
import * as S from './styles';
import {useSelector} from 'react-redux';
import {FlatList, Text} from 'react-native';
import {ListItems} from './components/ListItems';

export const Cart = () => {
  const {products, loading} = useSelector((state: any) => {
    return state.productsModuleReducer.productGetModule;
  });

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
        <Text>Sem produtos</Text>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItems
            product={item}
            handleRemoveItem={() => {}}
            handleAddItem={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
