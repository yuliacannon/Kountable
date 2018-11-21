import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Switch,
  BrowserRouter,
  Redirect,
  Router,
  Route
} from "react-router-dom";
//import { Route } from "react-router4-with-layouts";
import * as serviceWorker from "./serviceWorker";

import { fakeAuth } from "./StarterPages/LogIn";
import StarterLayout from "./StarterPages/StarterLayout";
import SignUp from "./StarterPages/SignUp";
import LogIn from "./StarterPages/LogIn";
import App from "./App";
import BusinesInformation from "./CreateProject/BusinesInformation";
import MainPage from "./CreateProject/MainPage";
import SupplierInformation from "./CreateProject/SupplierInformation";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

// ReactDOM.render(
//   <Router history={history}>
//     <Switch>
//       <Route
//         path="/business-info"
//         component={BusinesInformation}
//         layout={App}
//       />
//       <Route path="/supplier" component={SupplierInformation} layout={App} />
//       <Route exact path="/" component={MainPage} layout={App} />

//       <Route path="/signup" component={SignUp} exact layout={StarterLayout} />
//       <Route path="/login" component={LogIn} layout={StarterLayout} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <AppRoute
        path="/business-info"
        component={BusinesInformation}
        layout={App}
      />
      <AppRoute path="/supplier" component={SupplierInformation} layout={App} />
      <AppRoute exact path="/" component={MainPage} layout={App} />

      <AppRoute
        path="/signup"
        component={SignUp}
        exact
        layout={StarterLayout}
      />
      <AppRoute path="/login" component={LogIn} layout={StarterLayout} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

{
  /* <Route path="/signup" layout={StarterLayout} component={SignUp} />
        <Route path="/login" layout={StarterLayout} component={LogIn}/>
        <Route path="/business-info" layout={App} component={BusinesInformation}/> */
}

serviceWorker.unregister();
