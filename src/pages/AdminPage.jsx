import { useEffect, useState } from "react";

import ProductForm from "../components/ProductForm";
import ProductCard from "../components/ProductCard";

import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../services/api";

function AdminPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  function handleAddProduct(newProduct) {
    addProduct(newProduct).then((addedProduct) => {
      setProducts([...products, addedProduct]);
    });
  }

  function handleDeleteProduct(id) {
    deleteProduct(id).then(() => {
      const updatedProducts = products.filter(
        (product) => product.id !== id
      );

      setProducts(updatedProducts);
    });
  }


function handleUpdateProduct(id) {
  const newPrice = prompt("Enter the updated price:");

  const updatedProduct = {
    price: Number(newPrice),
  };

  updateProduct(id, updatedProduct).then((updatedProductFromServer) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return updatedProductFromServer;
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
  });
}



  return (
    <div>
      <h1>Admin Portal</h1>

      <ProductForm onAddProduct={handleAddProduct} />

<h2>Manage Products</h2>

{products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
    onDeleteProduct={handleDeleteProduct}
    onUpdateProduct={handleUpdateProduct}
  />
))}
    </div>
  );
}

export default AdminPage;