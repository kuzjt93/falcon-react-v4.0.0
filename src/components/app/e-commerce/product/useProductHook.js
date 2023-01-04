import { ProductContext } from 'context/Context';
import { useContext } from 'react';

const useProductHook = product => {
  const {
    productsState: { cartItems },
    productsDispatch,
    isInShoppingCart,
    isInFavouriteItems
  } = useContext(ProductContext);

  const handleAddToCart = (quantity, showModal, add) => {
    if (isInShoppingCart(product.id)) {
      const cartProduct = cartItems.find(item => item.id === product.id);
      productsDispatch({
        type: 'UPDATE_CART_ITEM',
        payload: {
          product: {
            ...cartProduct,
            quantity: add ? cartProduct.quantity + quantity : quantity,
            totalPrice: quantity * product.price
          },
          showModal,
          quantity
        }
      });
    } else {
      productsDispatch({
        type: 'ADD_TO_CART',
        payload: {
          product: {
            ...product,
            quantity,
            totalPrice: quantity * product.price
          }
        }
      });
    }
  };

  const handleFavouriteClick = () => {
    productsDispatch({
      type: isInFavouriteItems(product.id)
        ? 'REMOVE_FROM_FAVOURITES'
        : 'ADD_TO_FAVOURITES',
      payload: { product }
    });
  };
  return { handleAddToCart, handleFavouriteClick };
};

export default useProductHook;
