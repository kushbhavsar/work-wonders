import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';

const App = () => (

  <Router>
        <div >
            <Navbar />
            <Footer />
        </div>

  </Router>

);
export default App;
