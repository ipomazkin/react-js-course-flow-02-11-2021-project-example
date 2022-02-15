import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload: { id } } = action
      let productIndex = state.items.findIndex((p) => p.id === id);
      if (productIndex === -1) {
        state.items.push({
          id,
          amount: 1,
        });
      }
    },
    removeFromCart: () => {},
    setAmount: () => {},
    reset: (state, action) => {
      const { defaultState = initialState } = action.payload
      state.items = defaultState.items;
    },
  },
});

const { reducer, actions } = slice;

export default reducer;

export const { addToCart, removeFromCart, reset, setAmount } = actions;

export const selectCart = (rootState) => {
  return rootState.cart;
}
