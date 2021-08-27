import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header'
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header>
      </Header>
      <main>
      <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
