import { createStore } from "redux";

const initialState = {
  isMenuOpen: false,
};

export const SET_MENU_IS_OPEN = 'SET_MENU_IS_OPEN';

export function setMenuIsOpen(isOpen) {
  return {
    type: SET_MENU_IS_OPEN,
    payload: {
      isOpen,
    }
  }
}

function rootReducer(state = initialState, action) {
  if (action.type === SET_MENU_IS_OPEN) {
    return {
      ...state,
      isMenuOpen: action.payload.isOpen,
    }
  }

  return state
}

export const store = createStore(rootReducer);
