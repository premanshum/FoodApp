import { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header'
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {

  const [isCartShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  };

  const hideCartHandler = () =>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose = {hideCartHandler}></Cart>}
      <Header onCartClick={showCartHandler}>
      </Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
