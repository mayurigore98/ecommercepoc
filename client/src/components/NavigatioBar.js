// import React, {Component} from 'react';
// import {
//   Navbar , Container, NavItem
// } from 'reactstrap'
// import { NavLink } from 'react-router-dom';
// import PrivateRoute from "../private-route/privateRoute";
// import Dashboard from "./dashboard/Dashboard";

// class AppNavbar extends Component {

// render() { 
//   return(
// <div>
//       <Navbar  className="navbar  bg-success ">
//         <Container>
//           <text><h3>Shopping Cart For You..!!</h3></text>
//           <NavItem>
//             <NavLink to="/register" >Register</NavLink>
           
//           </NavItem>
//          </Container>
//       </Navbar>
// </div>
 
//   );
// };
// }

// export default AppNavbar;

import React, {Component} from 'react';

 import {NavLink,Route, Router } from 'react-router-dom';

import {
    
  Navbar,
  
  NavbarBrand,
 
  NavItem,
 
} from 'reactstrap';

class AppNavbar extends Component {
   state = {
        isOpen: false
    }    
toggle=(props) => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}

render() {
 
  return(
<div>
      <Navbar  className="navbar navbar-expand-lg navbar-dark bg-success ">
       
          <NavbarBrand style={{color:"white"}}lassName="active" href="/"><h5>Home</h5></NavbarBrand>
         
         
            <NavItem className="navbar-nav"onClick={this.toggle} >          
              <NavLink style={{color:"white"}} to ='/register'><h5>Register</h5></NavLink>           
              </NavItem>
             
        
         
       
      </Navbar>
</div>
  
 
  );
};
}

export default AppNavbar;
