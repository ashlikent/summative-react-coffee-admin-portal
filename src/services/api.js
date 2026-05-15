const BASE_URL = "http://localhost:3001/products";

export async function getProducts() {
  const response = await fetch(BASE_URL);

  const data = await response.json();

  return data;
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  const data = await response.json();

  return data;
}


export async function addProduct(newProduct) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  const data = await response.json();

  return data;
}


export async function deleteProduct(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}

export async function updateProduct(id, updatedProduct) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });

  const data = await response.json();

  return data;
}