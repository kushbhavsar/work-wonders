import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import BidAuction from './pages/BidAuction';
import Postpage from './pages/Postpage';


const App = () => (

  <Router>
        <div >
          <Switch>
            < Route  exact path="/" component = {Home}/>
            < Route  exact path = "/postpage" component = {Postpage}/> 
            < Route  exact path = "/register" component = {Register}/>
            < Route  exact path = "/bidauction" component = {BidAuction}/> 
          </Switch>
        </div>

  </Router>

);
export default App;
