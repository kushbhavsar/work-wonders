import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import BidAuction from './pages/BidAuction';
import Postpage from './pages/Postpage';
import LogginForm from './components/LogginForm';
import RegistrationForm from './components/RegistrationForm'


const App = () => (

  <Router>
        <div >
            < Route component = {Postpage}/>
        </div>

  </Router>

);
export default App;
