/***************************************************************************
 * State
 ***************************************************************************/
const initialState = {
  isMenuOpen: false,
};

/***************************************************************************
 * Action types
 ***************************************************************************/
export const SET_MENU_IS_OPEN = 'SET_MENU_IS_OPEN';

/***************************************************************************
 * Action creators
 ***************************************************************************/
export function setMenuIsOpen(isOpen) {
  return {
    type: SET_MENU_IS_OPEN,
    payload: {
      isOpen,
    }
  }
}

/***************************************************************************
 * Reducer
 ***************************************************************************/
export default function reducer(state = initialState, action) {
  if (action.type === SET_MENU_IS_OPEN) {
    return {
      ...state,
      isMenuOpen: action.payload.isOpen,
    }
  }

  return state
}
