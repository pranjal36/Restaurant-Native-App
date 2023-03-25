import {combineReducers} from 'redux';

const initialState = {
  menuItems: [],
  cartItems: [],
};

const menuReducer = (state = initialState.menuItems, action) => {
  switch (action.type) {
    case 'LOAD_MENU_ITEMS':
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cartItems, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default combineReducers({menuReducer, cartReducer});
