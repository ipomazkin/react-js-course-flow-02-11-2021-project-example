import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import settings from '../ducks/settings';
import cartReducer from '../ducks/cart'
import produce from "immer"

export const store = configureStore({
  reducer: {
    settings,
    cart: cartReducer,
    test: () => 1,
  },
  devTools: true,
});
