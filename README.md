# Coffee R Us Admin Portal

A React single page application for managing coffee products. Users can view products, search products, view product details, add new products, update product prices, and delete products.

## Features

- View all coffee products
- Search products by name
- View individual product details
- Add new products
- Update product prices
- Delete products
- Client-side routing with React Router
- Custom hook for fetching product data
- Styled with a modern coffee-inspired theme
- Tested with Vitest and React Testing Library

## Technologies Used

- React
- Vite
- React Router
- JSON Server
- JavaScript
- CSS
- Vitest
- React Testing Library

## Routes

- `/` - Home page
- `/shop` - Product shop page
- `/admin` - Admin portal
- `/products/:id` - Product details page

## API Endpoints

JSON Server runs at:

```txt
http://localhost:3001/products
```

## How to Run This Project

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Start the backend:

```bash
npx json-server --watch db.json --port 3001
```

Run tests:

```bash
npm test
```

## Author

Ashli Briggs
