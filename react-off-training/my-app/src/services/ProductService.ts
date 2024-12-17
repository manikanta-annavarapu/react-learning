import { ProductType } from "../types";
import Axios from "axios";

export const getProductList = async () => {
  const url =
    "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return Axios.get<ProductType[]>(url);
};
