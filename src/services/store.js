import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import settings from '../ducks/settings';
import cartReducer from '../ducks/cart'
import catalogReducer from '../ducks/catalog'
import produce from "immer"
import thunk from 'redux-thunk'
import { customLogger, think } from "../redux/middlewares/logger";

export const store = configureStore({
  reducer: {
    settings,
    cart: cartReducer,
    catalog: catalogReducer,
    test: () => 1,
  },
  devTools: true,
  middleware: [
    customLogger,
    thunk,
  ]
});
