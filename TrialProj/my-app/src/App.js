import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from '../src/components/Pages/Home'
import {Routes, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';
import SignUp from './components/Pages/Signup';
import Marketing from './components/Pages/Marketing';
import Consulting from './components/Pages/Consulting';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Routes>
    </>
  );
}

export default App;
