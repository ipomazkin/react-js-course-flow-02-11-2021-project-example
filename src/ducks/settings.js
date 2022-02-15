import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions: _actions } = createSlice({
  name: 'settings',
  initialState: {
    isMenuOpen: false,
    isMobile: false,
  },
  reducers: {
    setMenuIsOpen: (state, action) => {
      state.isMenuOpen = action.payload.isOpen;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload.isMobile;
    },
  }
});

export default reducer;

export const { setMenuIsOpen, setIsMobile } = _actions;
