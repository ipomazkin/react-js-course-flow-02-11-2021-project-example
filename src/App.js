import React, { useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { NewsItemPage } from "./pages/NewsItemPage";
import { NewsItemUnknownPage } from "./pages/NewsItemUnknownPage";
import { Header } from './components/Header'
import { Page404 } from "./pages/Page404";
import { routesForRender } from "./routesForRender";
import { routesConfig } from "./routesConfig";
import { useCart } from "./hooks/useCart";
import { useDispatch } from "react-redux";
import { reset } from "./ducks/cart";

export function App() {
  const cart = useCart();
  const dispatch = useDispatch();

  useEffect(() => {
    let cartJSON = window.localStorage.getItem('cart');
    if (cartJSON) {
      try {
        let cart = JSON.parse(cartJSON);
        dispatch(
          reset({
            defaultState: cart
          })
        );
      } catch (e) {
        window.localStorage.removeItem('cart');
      }
    }
  }, []);

  useEffect(() => {
    let cartJSON = JSON.stringify(cart);
    window.localStorage.setItem('cart', cartJSON);
  }, [cart]);

  return (
    <div className="app">
      <div className="app__header">
        <Header />
        <div>
          <ul>
            {routesConfig.map((route) => (
              <li key={route.key}>
                <NavLink to={route.path}>{route.pageTitle}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="app__content">
        <Routes>
          {routesForRender.map((route) => (
            <Route key={route.key} path={route.path} element={<route.element />} />
          ))}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/*" element={<NewsItemUnknownPage />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}
