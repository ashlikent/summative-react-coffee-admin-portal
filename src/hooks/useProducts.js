import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  return { products, isLoading };
}

export default useProducts;