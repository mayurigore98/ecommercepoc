import { ADD_TO_CART, REMOVE_FROM_CART, CART_SAVE_SHIPPING } from "./types";
import axios from 'axios';
export const addToCart = (items, product) => (dispatch) => {
  const cartItems= items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((item) => {
    if (item._id ===product._id) 
    {
      productAlreadyInCart = true;
      item.count++;
    }
  
  });
  
   if(!productAlreadyInCart) {
    cartItems.push({ ...product,count:1});
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};


export const removeFromCart = (items, product) => (dispatch) => {
  const cartItem= items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
 return  dispatch({ type: REMOVE_FROM_CART, payload: { cartItem } });
};




 export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}