import {IProduct} from '../../../productModule/modules/productsGetModule/productGetTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICartChangeReducer} from './cartChangeTypes';

export const cartChangeReducer = async ({
  product,
  products,
  type = 'ADD',
}: ICartChangeReducer) => {
  const productsStr: string | null = await AsyncStorage.getItem('@products');
  const repoProducts = productsStr ? JSON.parse(productsStr) : products;

  const newProducts = repoProducts?.map((item: IProduct) => {
    if (item.id === product.id) {
      let newQuantity = type === 'ADD' ? item.quantity + 1 : item.quantity - 1;
      if (newQuantity <= 0) {
        newQuantity = 0;
      }

      return {
        ...item,
        quantity: newQuantity,
        totalPrice: newQuantity * item.price,
      };
    }
    return item;
  });

  await AsyncStorage.setItem('@products', JSON.stringify(newProducts));

  return newProducts;
};

export const cartChangeRepository = ({
  product,
  products,
  type,
}: ICartChangeReducer) => cartChangeReducer({product, products, type});
