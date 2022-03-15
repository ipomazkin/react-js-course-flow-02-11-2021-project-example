import { routesKeys, routesConfig } from "./routesConfig";
import { DummyPage } from "./pages/DummyPage";
import { CartPage } from "./pages/CartPage";
import { CatalogPage } from "./pages/CatalogPage";
import { RegistrationPage } from "./pages/RegistrationPage";

const renderMap = {
  [routesKeys.home]: DummyPage,
  [routesKeys.about]: DummyPage,
  [routesKeys.contacts]: DummyPage,
  [routesKeys.cart]: CartPage,
  [routesKeys.catalog]: CatalogPage,
  [routesKeys.registration]: RegistrationPage,
};

export const routesForRender = routesConfig.map((route) => ({
  ...route,
  element: renderMap[route.key]
}));
