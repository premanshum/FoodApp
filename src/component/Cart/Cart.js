import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

  const cartItems = <ul>{[{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  ].map(item => <li>{item.name}</li>)}</ul>;

  return (
  <Modal>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button className={classes["button--alt"]}>Close</button>
      <button className={classes["button"]}>Order</button>
    </div>
  </Modal>);
}

export default Cart;