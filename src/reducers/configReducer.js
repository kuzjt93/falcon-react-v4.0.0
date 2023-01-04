import { settings } from 'config';
import { setItemToStore } from 'helpers/utils';

export const configReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CONFIG':
      if (payload.setInStore) {
        setItemToStore(payload.key, payload.value);
      }
      return {
        ...state,
        [payload.key]: payload.value
      };
    case 'REFRESH':
      return {
        ...state
      };
    case 'RESET':
      localStorage.clear();
      return {
        ...state,
        ...settings
      };
    default:
      return state;
  }
};
