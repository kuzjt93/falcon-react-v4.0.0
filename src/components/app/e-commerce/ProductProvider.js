import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from 'context/Context';
import { productData } from 'data/ecommerce/productData';
import { productReducer } from 'reducers/productReducer';

const ProductProvider = ({ children }) => {
  const initData = {
    initProducts: productData,
    products: productData,
    cartItems: [
      {
        ...productData[0],
        quantity: 3,
        totalPrice: productData[0].price * 3
      },
      {
        ...productData[1],
        quantity: 3,
        totalPrice: productData[1].price * 3
      },
      { ...productData[2], quantity: 3, totalPrice: productData[2].price * 3 }
    ],
    promo: null,
    favouriteItems: [],
    cartModal: {
      show: false,
      product: {},
      quantity: 0,
      type: 'add'
    }
  };
  const [productsState, productsDispatch] = useReducer(
    productReducer,
    initData
  );

  const isInShoppingCart = id =>
    !!productsState.cartItems.find(cartItem => cartItem.id === id);
  const isInFavouriteItems = id =>
    !!productsState.favouriteItems.find(
      favouriteItem => favouriteItem.id === id
    );

  return (
    <ProductContext.Provider
      value={{
        productsState,
        productsDispatch,
        isInShoppingCart,
        isInFavouriteItems
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProductProvider;
