import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

  return (<React.Fragment>
    <header className={classes.header}>
      <h1>Food App</h1>
      <HeaderCartButton onClick = {props.onCartClick}>Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage}></img>
    </div>
  </React.Fragment>);
}

export default Header;