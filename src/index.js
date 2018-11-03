import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import StarterLayout from './StarterPages/StarterLayout';
import SignUp from './StarterPages/SignUp'
import LogIn from './StarterPages/LogIn'
import App from './App'


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )

  const Bar = () => (
    <p>Bar</p>
  ) 

ReactDOM.render((
    <BrowserRouter>
        <Switch>

        <AppRoute path="/signup" layout={StarterLayout} component={SignUp} />
        <AppRoute path="/login" layout={StarterLayout} component={LogIn}/>
        <AppRoute path="/ko" layout={App} component={Bar}/>

      
        
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));


serviceWorker.unregister();
