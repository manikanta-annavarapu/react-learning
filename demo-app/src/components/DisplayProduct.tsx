import React from "react";

export interface Product {
  name: string;
  unitPrice: number;
  quantity: number;
}
// product: Product,
function DisplayProduct(prop: { product: Product }) {
  return (
    <>
      <tr>
        <td>{prop.product.name}</td>
        <td>{prop.product.unitPrice}</td>
        <td>{prop.product.quantity}</td>
        <td>{prop.product.unitPrice * prop.product.quantity}</td>
        <td style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button type="button" className="btn btn-warning">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
          <button type="button" className="btn btn-info">
            Details
          </button>
        </td>
      </tr>
    </>
  );
}

export default DisplayProduct;
