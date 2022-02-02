import React, { useState } from 'react';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { localeContext, LOCALE_EN } from './contexts/locale'
import { Provider } from "react-redux";
import { store } from "./services/store";

export function AppWrapper() {
  const [locale, setLocale] = useState(LOCALE_EN);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <localeContext.Provider value={{
          locale,
          setLocale,
        }}>
          <App />
        </localeContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}
