import {
  createBrowserRouter,
} from "react-router-dom";

import React from 'react'
import App from "../App";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetails from "../pages/ProductDetails";
import GalleryPage from "../pages/GalleryPage";
import CartPage from "../pages/CartPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {index: true, element: <HomePage />},
      {path: 'shop', element: <ShopPage />},
      {path: 'gallery', element: <GalleryPage />},
      {path: 'cart', element: <CartPage />},
      {path: 'product/:id', element: <ProductDetails />},
    ]
  },
]);