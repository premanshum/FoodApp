import React, { useContext, useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action)=>{

  if(action.type === 'ADD'){    
    const updatedItems = state.items.concat(action.value);
    const updatedAmount = state.totalAmount + action.value.price * action.value.count;
    return {
      ...state,
      items : updatedItems,
      totalAmount : updatedAmount
    };
  }
  else if(action.type === 'REMOVE'){
    return {};
  }

  return defaultCartState;
};


const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'ADD', value: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE', value: id});
  };

  const cartCtx = {
    items : cartState.items,
    totalAmount : cartState.totalAmount,
    addItem : addItemToCartHandler,
    removeItem : removeItemFromCartHandler
  }

  return (<CartContext.Provider value={cartCtx}>
    {props.children}
  </CartContext.Provider>)
};

export default CartProvider;