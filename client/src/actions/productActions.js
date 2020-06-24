import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_CATEGORY,
    
  } from "./types";
  
  export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
  };
  
  export const filterProducts = (products, category) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: {
        category: category,
        items:
          category === ""
            ? products
            : products.filter(
                (x) => x.product_category.indexOf(category) >= 0
              ),
      },
    });
  };

  
// export function auth() {
//   const request = axios.get(`${USER_SERVER}/auth`)
//       .then(response => response.data);

//   return {
//       type: AUTH_USER,
//       payload: request
//   }
// }
  