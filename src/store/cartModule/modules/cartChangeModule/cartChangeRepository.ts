import {ICartChangeReducer, IProductCart} from './cartChangeTypes';

export const cartAddProductReducer = async ({
  product,
  cartProducts,
}: ICartChangeReducer) => {
  const notHasProduct =
    cartProducts.find(item => item.id === product.id) === undefined;

  if (cartProducts?.length && !notHasProduct) {
    return;
  }

  return [
    ...cartProducts,
    {
      ...product,
      quantity: 1,
      totalPrice: product.price,
    },
  ];
};

export const cartRemoveProductRepository = async ({
  product,
  cartProducts,
}: ICartChangeReducer) => {
  return cartProducts.filter(item => item.id !== product.id);
};

export const cartCountItemReducer = async ({
  product,
  cartProducts,
  type = 'ADD',
}: ICartChangeReducer) => {
  const newProducts = cartProducts?.map((item: IProductCart) => {
    if (item.id === product.id) {
      let newQuantity =
        type === 'ADD'
          ? item.quantity + 1
          : item.quantity - 1 === 0
          ? 1
          : item.quantity - 1;

      return {
        ...product,
        quantity: newQuantity,
        totalPrice: newQuantity * product.price,
      };
    }

    return item;
  });

  return newProducts;
};

export const cartAddProductRepository = ({
  product,
  cartProducts,
}: ICartChangeReducer) => cartAddProductReducer({product, cartProducts});

export const cartCountItemRepository = ({
  product,
  cartProducts,
  type,
}: ICartChangeReducer) => cartCountItemReducer({product, cartProducts, type});
