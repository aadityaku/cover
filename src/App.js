import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Login from "./components/Login";
import Fotter from './components/Fotter';
import {BrowserRouter, Navigate, Route, Routes} from  "react-router-dom";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Register from './components/Register';
import { useSelector } from 'react-redux';
function App() {
  const {access_token} = useSelector(state => state.auth)
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/product/:slug" element={<Fotter/>}/>
        <Route path="/login" element={!access_token ? <Login/> : <Navigate to= '/' />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
