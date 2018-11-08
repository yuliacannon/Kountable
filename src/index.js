import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Route, BrowserRouter ,Router} from 'react-router-dom'
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

  

ReactDOM.render((
    <BrowserRouter>
        <Switch>

        <Route path="/signup" layout={StarterLayout} component={SignUp} />
        <Route path="/login" layout={StarterLayout} component={LogIn}/>
        <Route path="/business-info" layout={App} component={BusinesInformation}/>

      
        
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));

// ReactDOM.render((
// <Router>
//   <Route component={StarterLayout}>
//     <Route path="/signup" component={SignUp} />
//     <Route path="/login" component={LogIn} />
//   </Route>
//   <Route component={App}>
//     <Route path="/business-info" component={BusinesInformation} />
//   </Route>
// </Router>
//), document.getElementById('root'));


serviceWorker.unregister();
