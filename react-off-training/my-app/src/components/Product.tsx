import React from "react";
import Card from "./Card";

type Props = {
  data: any;
  btnClick: (id: number) => void;
};

function Product({ data, btnClick }: Props) {
  const renderStock = () => {
    if (data.productStock > 0) {
      return (
        <button onClick={() => btnClick(data.productId)}>Add to Cart</button>
      );
    } else {
      return <p>Out of Stock</p>;
    }
  };

  return (
    <Card>
      <img src={data.productImage} alt="" />
      <h1>{data.productName}</h1>
      <p>{data.productPrice}</p>
      {renderStock()}
    </Card>
  );
}

export default Product;
