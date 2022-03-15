import React, { useState } from 'react';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { localeContext, LOCALE_EN } from './contexts/locale'
import { Provider } from "react-redux";
import { store } from "./services/store";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import CssBaseline from '@mui/material/CssBaseline';

export function AppWrapper() {
  const [locale, setLocale] = useState(LOCALE_EN);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <localeContext.Provider value={{
              locale,
              setLocale,
            }}>
              <App />
            </localeContext.Provider>
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}
