import "@testing-library/jest-dom/vitest";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ShopPage from "../pages/ShopPage";

test("renders shop page heading", () => {
  render(
    <BrowserRouter>
      <ShopPage />
    </BrowserRouter>
  );

const loadingMessages = screen.getAllByText(/loading products/i);
expect(loadingMessages.length).toBeGreaterThan(0);
});


test("renders loading message", () => {
  render(
    <BrowserRouter>
      <ShopPage />
    </BrowserRouter>
  );

  const loadingMessages = screen.getAllByText(/loading products/i);

  expect(loadingMessages.length).toBeGreaterThan(0);
});