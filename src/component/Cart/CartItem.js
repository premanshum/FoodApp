import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  const AddButtonHandler = (event)=>{
    event.preventDefault();
    props.onAdd(props.item);
  }

  const RemoveButtonHandler = (event)=>{
    event.preventDefault();
    props.onRemove(props.item.id);
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.count}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={RemoveButtonHandler}>−</button>
        <button onClick={AddButtonHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
