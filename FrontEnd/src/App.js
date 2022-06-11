/** @format */

import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/Users/SignUp';
import SignIn from './components/Users/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './main_pages/Home';
import Stores from './main_pages/Stores';
import YourStore from './main_pages/YourStore';
import Cart from './main_pages/Cart';
import YourOrders from './main_pages/YourOrders';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/signup' exact element={<SignUp />}></Route>
          <Route path='/signin' exact element={<SignIn />}></Route>
          <Route path='/stores' exact element={<Stores />}></Route>
          <Route path='/yourstore' exact element={<YourStore />}></Route>
          <Route path='/cart' exact element={<Cart />}></Route>
          <Route path='/orders' exact element={<YourOrders />}></Route>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}
export default App;
