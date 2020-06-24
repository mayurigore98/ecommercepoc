

import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";



class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isAuthenticated: false,
      token: "",
      expiresAt:""
    };
  }

  responseGoogle = response => {
    console.log(response)
    localStorage.setItem("token" ,response.access_token);
    this.setState(
      { userDetails: response.profileObj,
         isAuthenticated: true ,
         token:response.access_token ,
          expiresAt :JSON.stringify((response.expiresIn * 1000) + new Date().getTime())
      });
   
  };
  

  logout = () => {
    this.setState({isAuthenticated: false})
  };

  render() {
   
    return (
      <div className="login">
        {!this.state.isAuthenticated && (
          <GoogleLogin
            clientId="674867583678-blrhc2he8d5r3r9hhavkisqcs56hkkma.apps.googleusercontent.com" //TO BE CREATED
           
            render={renderProps => (
              <button
                className="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}>
              
                Log in with Google
              </button>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            
          />
        )
        
        }
        {this.state.isAuthenticated && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                render={renderProps => (
                  <button
                    className="logout-button"
                    onClick={renderProps.onClick}
                  >
                    Log Out
                  </button>
                )}
                onLogoutSuccess={this.logout}
              />

            
              <br />
              <br />

              <div className="name">
                Welcome  {this.state.userDetails.givenName}{" "}
                {this.state.userDetails.familyName}
              </div>

              <div className="email"><i>{this.state.userDetails.email}</i></div>
            
            </div>
            
            <div className="bar" />
            <div className="stand" />
          </div>
        )}
      </div>
    );
  }
}

export default login;