import { DummyPage } from "./pages/DummyPage";

export const routesKeys = {
  home: 'home',
  about: 'about',
  contacts: 'contacts',
  cart: 'cart',
  catalog: 'catalog',
};

export const routesConfig = [
  {
    key: routesKeys.home,
    path: '/',
    pageTitle: 'Home',
  },
  {
    key: routesKeys.contacts,
    path: '/contacts',
    pageTitle: 'Contacts',
  },
  {
    key: routesKeys.about,
    path: '/about',
    pageTitle: 'About',
  },
  {
    key: routesKeys.cart,
    path: '/cart',
    pageTitle: 'Cart',
  },
  {
    key: routesKeys.catalog,
    path: '/catalog',
    pageTitle: 'Catalog',
  },
];
