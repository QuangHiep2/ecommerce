import './App.css';
import Home from './Component/Home';
import Products from './Component/Products';
import {Routes, Route, Router} from 'react-router-dom';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Header from './Component/header';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/products/:id" element={<Product />}/>
      </Routes>      
    </>
  );
}

export default App;
