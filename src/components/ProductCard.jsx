import { Link } from "react-router-dom";

function ProductCard({ product, onDeleteProduct, onUpdateProduct }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>Origin: {product.origin}</p>

      <p>${product.price}</p>

      <Link to={`/products/${product.id}`}>View Details</Link>

      {onDeleteProduct && (
        <button onClick={() => onDeleteProduct(product.id)}>
          Delete
        </button>
      )}

      {onUpdateProduct && (
        <button onClick={() => onUpdateProduct(product.id)}>
    Update Price
        </button>
)}
    </div>
  );
}

export default ProductCard;