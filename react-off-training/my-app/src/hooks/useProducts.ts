import { useEffect, useState } from "react";
import { getProductList } from "../services/ProductService";
import { ProductType } from "../types";

function useProducts() {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const fetchData = async () => {
    try {
      const response = await getProductList();
      console.log("Data fetched", response.data);
      setProductList(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return productList;
}

export default useProducts;
