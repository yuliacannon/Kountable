import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch, Router, Route, BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import StarterLayout from './StarterPages/StarterLayout';
import App from './App';

import SignUp from './StarterPages/SignUp'
import LogIn from './StarterPages/LogIn'

// ReactDOM.render((
//     <BrowserRouter>
//         <Switch>
        
//         <Route exactpath='/' component={StarterLayout}>
//           <Route path="signup" component={SignUp} />
//           <Route path="login" component={LogIn}/>
//         </Route>
      
//         <Route component={App}>
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   ), document.getElementById('root'));

ReactDOM.render(<StarterLayout/>,document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
