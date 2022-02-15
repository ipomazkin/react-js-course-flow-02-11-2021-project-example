import { useSelector } from "react-redux";
import { selectCart } from "../ducks/cart";

export function useCart() {
  return useSelector(selectCart)
}
