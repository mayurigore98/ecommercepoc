import { ADD_TO_CART, REMOVE_FROM_CART,CART_SAVE_SHIPPING } from "../actions/types";

const initialState= { items:[]};
export default function (state = initialState, action) {
 
  switch (action.type) {
    case ADD_TO_CART:
      return { 
        ...state, 
        items: action.payload.cartItems
       };

    case REMOVE_FROM_CART:
      return {
         ...state, 
         items: action.payload.cartItems 
        };

      case CART_SAVE_SHIPPING:
        return { ...state, shipping: action.payload };
    default:
      return state;
  }
}
