import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import BidAuction from './pages/BidAuction';
import Bid from './pages/Bid';
import LogginForm from './components/LogginForm';
import RegistrationForm from './components/RegistrationForm'


const App = () => (

  <Router>
        <div >
            < Route component = {BidAuction}/>
        </div>

  </Router>

);
export default App;
