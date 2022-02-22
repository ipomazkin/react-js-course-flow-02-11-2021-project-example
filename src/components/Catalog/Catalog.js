import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import goods from './goods.json'
import { useSelector, useDispatch } from "react-redux";
import { selectCart, addToCart } from "../../ducks/cart";
import { getCatalogProducts, createCatalogProduct } from "../../api/CatalogAPI";
import { loadCategories, selectCategoriesRequest } from "../../ducks/catalog";
import { useQuery, useMutation, useQueryClient } from "react-query";

export function Catalog() {
  const cart = useSelector(selectCart);
  const categoriesReq = useSelector(selectCategoriesRequest);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    isLoading: isProductsLoading,
    data: products,
    error: productsError
  } = useQuery('products', async () => {
    const res = await getCatalogProducts();
    return res.data;
  });

  const productCreateMutation = useMutation(async ({ product }) => {
    const res = await createCatalogProduct(product);
    return res.data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  useEffect(async () => {
    dispatch(loadCategories);
  }, []);

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
    <div>

      <div>
        <button onClick={() => productCreateMutation.mutate({ product: {
          id: 12121212,
          title: '121212'
        }})
        }>{productCreateMutation.isLoading ? 'creating product...' : 'create product'}</button>
        {productCreateMutation.error && (
          <div style={{ color: 'red' }}>{productCreateMutation.error.message}</div>
        )}
        {productCreateMutation.isSuccess && (
          <div style={{ color: 'green' }}>Product has been created</div>
        )}
      </div>

      <div>
        {categoriesReq.status === 'loading' && (
          <div>Loading categories...</div>
        )}
        {categoriesReq.status !== 'loading' && (
          <div>
            {categoriesReq.error ? (
              <div>{categoriesReq.error}</div>
            ) : (
              <div>{categoriesReq.data.map((category) => (
                <div key={category.id}>{category.name}</div>
              ))}</div>
            )}
          </div>
        )}
      </div>
      <div className="">
        {isProductsLoading && (
          <div>Loading products...</div>
        )}
        {!isProductsLoading && (
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
            {productsError ? (
              <div>{productsError}</div>
            ) : products.map((product) => (
              <div style={{ width: '33.33%' }} key={product.id}>
                <h2>{product.title}</h2>
                <p><i><b>${product.price}</b></i></p>
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
        )}
      </div>
    </div>
  );
}

Catalog.propTypes = {};
