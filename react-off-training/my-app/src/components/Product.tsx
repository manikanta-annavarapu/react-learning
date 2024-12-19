import React from "react";
import Card from "./Card";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type Props = {
  data: any;
  btnClick: (id: number) => void;
};

function Product({ data, btnClick }: Props) {
  // here the state represents the entire store
  const code = useSelector((state: RootState) => state.currency);
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
      <p>
        {code} {data.productPrice}
      </p>
      {renderStock()}
    </Card>
  );
}

export default Product;
