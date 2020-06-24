import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../actions/productActions";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
       
        <div className="col-md-4">
          <label>
            {" "}
            Choose Category
            <select
              className="form-control"
              value={this.props.category}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">All Categories</option>
              <option value="fruit">Fruits</option>
              <option value="spices">Spices</option>
              <option value="vegetable">Vegetables</option>
              <option value="bread">Bread</option>
              <option value="dairy">Dairy</option>
             
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  category: state.products.category,
  
});
export default connect(mapStateToProps, { filterProducts })(
  Filter
);
