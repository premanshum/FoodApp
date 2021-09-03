import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => { };

  const removeItemFromCartHandler = (id) => { };

  const cartCtx = {
    items : [{
      name : 'Sushi',
      count : 3
    },
    {
      name : 'Schnitzel',
      count : 2
    }],
    totalAmount : 0,
    addItem : addItemToCartHandler,
    removeItem : removeItemFromCartHandler
  }

  return (<CartContext.Provider value={cartCtx}>
    {props.children}
  </CartContext.Provider>)
};

export default CartProvider;