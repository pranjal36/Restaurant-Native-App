import {menuItems} from './data';

const LOAD_MENU_ITEMS = 'LOAD_MENU_ITEMS';
const ADD_TO_CART = 'ADD_TO_CART';

export {LOAD_MENU_ITEMS, ADD_TO_CART};

const loadMenuItems = items => {
  return {type: 'LOAD_MENU_ITEMS', payload: items};
};

const addToCart = item => {
  return {type: 'ADD_TO_CART', payload: item};
};

const fetchMenuItems = () => {
  return dispatch => {
    dispatch(loadMenuItems(menuItems));
  };
};

const selectMenuItems = state => state.menuReducer;

export {loadMenuItems, addToCart, fetchMenuItems, selectMenuItems};
