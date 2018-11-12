import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Switch,
  Route,
  BrowserRouter, 
  Redirect
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import StarterLayout from './StarterPages/StarterLayout';
import SignUp from './StarterPages/SignUp'
import LogIn from './StarterPages/LogIn'
import App from './App'
import BusinesInformation from './CreateProject/BusinesInformation';


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

  

ReactDOM.render((
    <BrowserRouter>
        <Switch>

        <Route path="/signup"  component={SignUp} />
        <Route path="/login"  component={LogIn}/>
        <PrivateRoute path="/business-info"  component={BusinesInformation}/>

      
        
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));


  {/* <Route path="/signup" layout={StarterLayout} component={SignUp} />
        <Route path="/login" layout={StarterLayout} component={LogIn}/>
        <Route path="/business-info" layout={App} component={BusinesInformation}/> */}




serviceWorker.unregister();
