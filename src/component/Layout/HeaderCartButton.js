import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from '../Cart/CartIcon';

const Button = (props)=>{
    return (      
    <button 
        className= {classes.button}
        type = {props.type || 'button'}
        onClick={props.onClick}
    >
      <span className={classes.icon}><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={classes.badge}>4</span>
    </button>);
};

export default Button;