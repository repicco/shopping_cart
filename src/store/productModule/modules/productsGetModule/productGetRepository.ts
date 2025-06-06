import {Product} from './productGetTypes';
import {products} from './utils';

const getProducts = async () => {
  try {
    const newProducts: Product[] = await Promise.resolve(products);

    return newProducts;
  } catch (error) {
    return error;
  }
};

export const productGetRepository = () => getProducts();
