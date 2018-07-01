import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import BidAuction from './pages/BidAuction';
import Bid from './pages/Bid';


const App = () => (

  <Router>
        <div >
            <Bid/>
        </div>

  </Router>

);
export default App;
