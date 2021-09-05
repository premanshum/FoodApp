import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import React, { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartContext = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    const itemToAdd = {...item, count: 1};
    cartContext.addItem(itemToAdd);
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = <ul className={classes['cart-items']}>{
    cartContext.items.map(item => 
    <CartItem 
      key={item.id}
      item={item}
      onAdd={cartItemAddHandler}
      onRemove={cartItemRemoveHandler} 
      />)}
    </ul>;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  return (
    <Modal onBackdropClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>);
}

export default Cart;