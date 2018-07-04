import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import BidAuction from './pages/BidAuction';
import Bid from './pages/Bid';
import LogginForm from './components/LogginForm';


const App = () => (

  <Router>
        <div >
            <Home/>
        </div>

  </Router>

);
export default App;
