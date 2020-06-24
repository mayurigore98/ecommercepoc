import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import { BrowserRouter as Router,Route} from "react-router-dom";
import store from "./store";
import NavigationBar from './components/NavigatioBar';

import "./App.css";


import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./private-route/privateRoute";


if (localStorage.jwtToken) {
 
  const token = localStorage.jwtToken;
  setAuthToken(token);
 
  const decoded = jwt_decode(token);
  
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
   
    store.dispatch(logoutUser());

  
    window.location.href = "./login";
  }
}

class App extends Component {
 
  render() {
   
    return (
      <Provider store={store}>
         <Router>
               <NavigationBar />      
               <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
             
              <Route path="/" component={Products} />   
            </div>
            <div className="col-md-3">
              <Basket /> 
                     
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            </div>
          </div> 

                   
          </Router>
      </Provider>
    );
  }
}

export default App;
