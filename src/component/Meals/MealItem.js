import React, {useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    const itemToAdd = {
      id : props.meal.id,
      name : props.meal.name,
      count : +quantity,
      price : props.meal.price
    }
    console.log('Item to Add : ', itemToAdd);
    cartCtx.addItem(itemToAdd);
  };


  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;