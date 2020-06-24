import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_CATEGORY,
   
  } from "../actions/types";
  
  const initState = { items: [], filteredItems: [],category: "", sort: "" };
  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload, filteredItems: action.payload };
      case FILTER_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          filteredItems: action.payload.items,
          category: action.payload.CATEGORY,
        };
     
  
      default:
        return state;
    }
  }
  