import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


const App = () => (

  <Router>
        <div >
            <Home/>
        </div>

  </Router>

);
export default App;
