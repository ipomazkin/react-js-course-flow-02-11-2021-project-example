import { createStore } from "redux";

const initialState = {
  isMenuOpen: false,
  isPageScrolled: false,
};

function rootReducer(state = initialState, action) {
  console.log('--- rootReducer ---', action);

  if (action.type === 'test') {
    return {
      ...state,
      test: 123,
    }
  }

  return state
}

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('--- subscribe ---', {
    newState: store.getState(),
  });
});

// window.store = store;
