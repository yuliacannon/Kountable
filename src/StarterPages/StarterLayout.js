import React, { Component } from 'react';
import logo from '../img/logo2.png'
import './StarterLayout.css'
import {Switch, Router, Route, BrowserRouter } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'


class StarterLayout extends Component{
    render() {
        return(
            <BrowserRouter>
            <div className='main-wrapper'>
                <div class='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LogIn}/>
            </Switch>
            </div>
            
            </BrowserRouter>
        );
    }
}

export default StarterLayout;

  //<Route path="/signup" component={SignUp} />