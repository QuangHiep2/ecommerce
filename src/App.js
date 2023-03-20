import './App.css';
import Home from './Component/Home';
import Products from './Component/Products';
import {Routes, Route} from 'react-router-dom';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Header from './Component/header';
import Login from './Component/Login';
import Register from './Component/Register';
import Search from './Component/Search';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/products/:id" element={<Product />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/search" element={<Search/>}/>
      </Routes>      
    </>
  );
}

export default App;
