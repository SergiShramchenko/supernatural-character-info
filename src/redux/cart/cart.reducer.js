import { GET_CART } from './cart.types';

const initialState = {
  name: '',
  id: null,
  info: '',
  death_reason: '',
  killer: '',
  murder_weapon: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};
