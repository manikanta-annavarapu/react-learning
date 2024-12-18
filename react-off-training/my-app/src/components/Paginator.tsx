import React from "react";
import useProducts from "../hooks/useProducts";
import { SetURLSearchParams } from "react-router-dom";

type Props = {
  changePage: SetURLSearchParams;
};
export default function Paginator({ changePage }: Props) {
  const products = useProducts();
  const itemsPerPage = 10;
  const numberOfButtons = products.length / itemsPerPage;
  const buttons = Array.from({ length: numberOfButtons }, (_, i) => i + 1);
  console.log(buttons);
  return (
    <div>
      {buttons.map((x) => (
        <button key={x} onClick={() => changePage({ page: x.toString() })}>
          {x}
        </button>
      ))}
    </div>
  );
}
