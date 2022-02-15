import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import goods from './goods.json'
import { useSelector, useDispatch } from "react-redux";
import { selectCart, addToCart } from "../../ducks/cart";

export function Catalog() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  // cartItems = { 1: true, 2: true }
  // cartItems[product.id] !== undefined | false
  const cartItems = useMemo(() => {
    let map = {};

    cart.items.forEach((item) => {
      map[item.id] = true;
    });

    return map;
  }, [cart.items])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    }} className="">
      {goods.map((product) => (
        <div style={{ width: '33.33%' }} key={product.id}>
          <h2>{product.title}</h2>
          <p><i><b>${product.price.toFixed(2)}</b></i></p>
          {cartItems[product.id] ? (
            <button>remove from cart</button>
          ) : (
            <button
              onClick={() => {
                const action = addToCart({
                  id: product.id,
                });
                dispatch(action);
              }}
            >add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
}

Catalog.propTypes = {};
