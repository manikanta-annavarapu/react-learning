import React from "react";
import { changeCurrency } from "../store/slices/currencySlice";
import { useDispatch } from "react-redux";

export default function Currency() {
  const codes = ["INR", "USD", "EUR", "GBP", "CAD"];

  // every actions should be dispatched
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) => {
        dispatch(changeCurrency(e.target.value));
      }}
    >
      {codes.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
