import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navigation,Home,Footer,Accommodation,Login,Register,Checkout
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>    
      <Route path="/accommodation" element={<Accommodation/>}/>      
      <Route path="/login" element={<Login/>}/>  
      <Route path="/register" element={<Register/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
     
    
    
</Routes>
<Footer />
     </Router>,

     document.getElementById("root")

);
reportWebVitals();

