import { routesKeys, routesConfig } from "./routesConfig";
import { DummyPage } from "./pages/DummyPage";

const renderMap = {
  [routesKeys.home]: DummyPage,
  [routesKeys.about]: DummyPage,
  [routesKeys.contacts]: DummyPage,
};

export const routesForRender = routesConfig.map((route) => ({
  ...route,
  element: renderMap[route.key]
}));
