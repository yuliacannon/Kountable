import React, { Component } from 'react';
import logo from './img/logo.png'
import user from './img/user.png'
import './App.css';
import {Switch, Router, Route, BrowserRouter } from 'react-router-dom'
import SignUp from './StarterPages/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className='header'>
          <img src={logo} alt='logo'/>
          <img src={user} alt='logoUser'/>
        </div>

        <div className='content'>

        </div>

        <div className='footer'>
          <ul>
            <li><a href=''>Privacy</a></li>
            <li><a href=''>Terms of Service</a></li>
          </ul>
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
