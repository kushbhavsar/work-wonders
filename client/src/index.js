import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter as Router, Route, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById('root'));
//registerServiceWorker();
