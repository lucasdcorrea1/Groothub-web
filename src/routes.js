import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/Auth.js";
import Footer from './components/Footer';


import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PageNotFound from "./pages/PageNotFound";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (<Component {...props} />) : 
      (<Redirect to={{ pathname: "/signin", state: { from: props.location } }} />)
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer/>

  </BrowserRouter>
);

export default Routes;