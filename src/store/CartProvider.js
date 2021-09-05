import React, { useContext, useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action)=>{

  let updatedItems;
  if(action.type === 'ADD'){

    const updatedAmount = state.totalAmount + action.value.price * action.value.count;
    const existingItem = state.items.find((item)=> item.id === action.value.id);

    if(existingItem){
      const updatedItem = {
        ...existingItem,
         count: existingItem.count + action.value.count,
        }; // Create a new object from the existing object, and then update the values
        
      const filteredItems = state.items.filter((item)=>item.id !== action.value.id);
      updatedItems = filteredItems.concat(updatedItem);// This creates a new array, with new item appended at the end
    }
    else{
      updatedItems = state.items.concat(action.value);
    }
    
    return {
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

  console.log("cartCtx : ", cartCtx);

  return (<CartContext.Provider value={cartCtx}>
    {props.children}
  </CartContext.Provider>)
};

export default CartProvider;