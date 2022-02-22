import { getCatalogCategories } from "../api/CatalogAPI";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'catalog',
  initialState: {
    categories: {
      status: 'initial',
      error: null,
      data: [],
    }
  },
  reducers: {
    loadCategoriesStart: (state, action) => {
      state.categories.status = 'loading';
      state.categories.error = null;
    },
    loadCategoriesEnd: (state, action) => {
      const { data, error } = action.payload;
      state.categories.status = error ? 'error' : 'success';
      state.categories.error = error;
      state.categories.data = data;
    }
  },
});

const { reducer, actions } = slice

export default reducer;

export const { loadCategoriesStart, loadCategoriesEnd } = actions;

export async function loadCategories(dispatch) {
  dispatch(loadCategoriesStart());
  try {
    const res = await getCatalogCategories();
    const { data } = res;
    dispatch(loadCategoriesEnd({
      data,
      error: null,
    }));
  } catch (e) {
    dispatch(loadCategoriesEnd({
      data: [],
      error: e.getMessage(),
    }));
  }
}

export function selectCategoriesRequest(state) {
  return state.catalog.categories;
}
