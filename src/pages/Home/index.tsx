import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useProduct} from './useProduct';

export const Home = () => {
  const {products, loading} = useSelector((state: any) => {
    return state.productsModuleReducer.productGetModule;
  });

  useEffect(() => {
    console.log({products});
  }, [products]);

  const {} = useProduct();

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!products) {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Home</Text>
      {products.map((product: any) => {
        return <Text key={product.id}>{product.name}</Text>;
      })}
    </View>
  );
};
