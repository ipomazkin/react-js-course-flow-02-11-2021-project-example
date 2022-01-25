import { DummyPage } from "./pages/DummyPage";

export const routesKeys = {
  home: 'home',
  about: 'about',
  contacts: 'contacts',
};

export const routesConfig = [
  {
    key: routesKeys.home,
    path: '/test/',
    pageTitle: 'Home',
  },
  {
    key: routesKeys.contacts,
    path: '/test/contacts',
    pageTitle: 'Contacts',
  },
  {
    key: routesKeys.about,
    path: '/test/about',
    pageTitle: 'About',
  },
];
