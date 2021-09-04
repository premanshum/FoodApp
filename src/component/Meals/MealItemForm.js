import React, {useState} from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) =>{

  const [mealQty, setMealQty] = useState(1);

  const submitHandler = (event) =>{
    event.preventDefault();
    console.log('Add to Cart')
    props.onAddToCart(mealQty);
  }

  const changeHandler = (event)=>{
    setMealQty(event.target.value);
  }

  return (
  <form className={classes.form} onSubmit={submitHandler}>
    <Input label='Amount' 
          input={{
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step : '1'
          }} 
          value = {mealQty}
          onChange = {changeHandler}
    />
    <Button onClick={submitHandler}>+ Add</Button>
  </form>);
}

export default MealItemForm;