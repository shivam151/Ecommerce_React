 
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';

import { Routes ,Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Contact from './component/Contact'
import About from './component/About';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Contact" element={<Contact/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/products/:id" element={<Product/>}/>
    <Route exact path="/Cart" element={<Cart/>}/>

    </Routes>
    </>
  );
}

export default App;
