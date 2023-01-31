import React from "react";
import DisplayProduct, { Product } from "./DisplayProduct";
import ProductsList from "./products.json";

function DisplayProducts() {
  //console.log(Products.products.map());
  let products: Product[] = ProductsList.products;
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr key={199}>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => {
            return <DisplayProduct product={p} key={index} />;
          })}
        </tbody>
      </table>

      <button type="button" className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default DisplayProducts;
