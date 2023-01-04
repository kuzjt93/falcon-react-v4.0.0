/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-case-declarations */
import { toast } from 'react-toastify';
// dummy promo codes
const promoCodes = [
  { code: 'GET20', discount: 20 },
  { code: 'GET50', discount: 50 }
];

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SORT_PRODUCT':
      return {
        ...state,
        products: [...state.products].sort((a, b) => {
          if (payload.sortBy === 'review') {
            if (payload.order === 'asc') {
              return a.reviews.length - b.reviews.length;
            } else {
              return b.reviews.length - a.reviews.length;
            }
          } else {
            if (payload.order === 'asc') {
              return a[payload.sortBy] - b[payload.sortBy];
            } else {
              return b[payload.sortBy] - a[payload.sortBy];
            }
          }
        })
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, payload.product],
        cartModal: {
          show: true,
          product: payload.product
        }
      };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === payload.product.id ? payload.product : item
        ),
        cartModal: {
          show: payload.showModal,
          product: payload.product,
          quantity: payload.quantity
        }
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          product => product.id !== payload.product.id
        ),
        cartModal: {
          show: true,
          product: payload.product,
          type: 'remove'
        }
      };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === payload.product.id
            ? { ...product, favorite: product.favorite + 1 }
            : product
        ),
        favouriteItems: [...state.favouriteItems, payload.product]
      };
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === payload.product.id
            ? { ...product, favorite: product.favorite - 1 }
            : product
        ),
        favouriteItems: state.favouriteItems.filter(
          product => product.id !== payload.product.id
        )
      };
    case 'TOGGLE_CART_MODAL':
      return {
        ...state,
        cartModal: {
          ...state.cartModal,
          show: !state.cartModal.show
        }
      };
    case 'APPLY_PROMO': {
      const code = promoCodes.find(promo => promo.code === payload.promoCode);
      if (code) {
        toast.success(
          <span>
            Congratulations, You got <strong>${code.discount}%</strong>{' '}
            discount!
          </span>
        );
      } else {
        toast.error('Promo code is not valid! Try again.');
      }
      return {
        ...state,
        promo: code
      };
    }
    case 'CHECKOUT': {
      return {
        ...state,
        cartItems: [],
        promo: null
      };
    }
    case 'RESET':
      return {
        ...state
      };
    default:
      return state;
  }
};
