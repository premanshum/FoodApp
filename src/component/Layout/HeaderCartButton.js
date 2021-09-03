import React, {useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const Button = (props)=>{

    const cartContext = useContext(CartContext);

    const numberOfItemsInCart = cartContext.items.reduce((curNumber, item)=>{ 
      return curNumber + item.count;
    }, 0);

    return (      
    <button 
        className= {classes.button}
        type = {props.type || 'button'}
        onClick={props.onClick}
    >
      <span className={classes.icon}><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>);
};

export default Button;