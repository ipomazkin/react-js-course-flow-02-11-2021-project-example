import React from 'react';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";

export function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
