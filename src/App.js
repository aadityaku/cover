import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Login from "./components/Login";
import Fotter from './components/Fotter';
import {BrowserRouter, Route, Routes} from  "react-router-dom";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
function App() {
  
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/product/:slug" element={<Fotter/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
