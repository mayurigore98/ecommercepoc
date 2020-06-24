import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import {  Redirect, Link } from 'react-router-dom';
import PropTypes from "prop-types";

import { addToCart, removeFromCart,  } from "../actions/cartActions";
class Basket extends Component {

  
  render() {
    const { cartItems } = this.props;
  

    return (
      <div className="alert alert-success">
        {cartItems.length === 0 ? (
          "Cart is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li >
                  <b>{item.product_name}</b>
                  x{item.count} ={item.product_price * item.count}
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={() =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.product_price)}
                </li>
              ))}
            </ul>

            <b>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.product_price * c.count, 0)
              )}
            </b>
                {this.props.auth.isAuthenticated ? 
                    <button  onClick={() => alert('Proceed to pay')} 
                    style={{color:"black"}}  className="btn btn-white btn-xs" disabled={cartItems.length === 0}>
                     CheckOut
                     </button> : 

                  <Link to="/register"> <button   
                  style={{color:"black"}}  className="btn btn-white btn-xs" disabled={cartItems.length === 0}>
                   CheckOut
                  </button></Link>}

          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
