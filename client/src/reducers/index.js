import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  auth: authReducer,
  errors: errorReducer
});
