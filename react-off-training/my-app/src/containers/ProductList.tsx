import Product from "../components/Product";
import { ProductType } from "../types";
import { getProductList } from "../services/ProductService";

function ProductList() {
  let productList: ProductType[] = [];
  const fetchData = async () => {
    try {
      const response = await getProductList();
      console.log("Data fetched", response.data);
      productList = response.data;
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  fetchData();

  return (
    <div>
      {productList.map((product) => {
        return (
          <Product
            key={product.productId}
            data={product}
            btnClick={(id: number) => console.log("Add to cart", id)}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
