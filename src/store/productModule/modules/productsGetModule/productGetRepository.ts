import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from './productGetTypes';
import {products} from './utils';

const getProducts = async () => {
  try {
    const oldProductsStr: string | null = await AsyncStorage.getItem(
      '@products',
    );
    const oldProducts = JSON.parse(oldProductsStr || '[]');
    let remoteProducts: IProduct[] = [];

    if (oldProducts?.length && oldProducts.length > 0) {
      remoteProducts = oldProducts;
    } else {
      remoteProducts = await Promise.resolve(products);
    }

    return remoteProducts;
  } catch (error) {
    return error;
  }
};

export const productGetRepository = () => getProducts();
