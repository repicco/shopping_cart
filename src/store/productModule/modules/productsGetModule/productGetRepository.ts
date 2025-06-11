import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from './productGetTypes';
import {products} from './utils';

const getProducts = async () => {
  try {
    const oldProductsStr: string | null = await AsyncStorage.getItem(
      '@products',
    );
    const oldProducts = JSON.parse(oldProductsStr || '[]');
    let remoteProducts: any[] = [];

    if (oldProducts?.length && oldProducts.length > 0) {
      remoteProducts = oldProducts;
    } else {
      remoteProducts = await Promise.resolve(products);
    }

    const newProducts: IProduct[] = [
      ...remoteProducts.map((item: IProduct) => ({
        ...item,
        quantity: 0,
        totalPrice: 0,
      })),
    ];

    console.log({newProducts});

    return newProducts;
  } catch (error) {
    return error;
  }
};

export const productGetRepository = () => getProducts();
