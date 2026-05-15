import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getProductById } from "../services/api";

function ProductDetails() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) {
    return <h2>Loading product...</h2>;
  }

  return (
    <div className="product-card">
      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <p>
        <strong>Origin:</strong> {product.origin}
      </p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>
    </div>
  );
}

export default ProductDetails;