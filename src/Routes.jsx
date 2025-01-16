import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

import NotFound from "./pages/Notfound";
import MockapiFetch from "./pages/MockapiFetch";
import ProductDetails from "./components/ProductDetails";
const Routes = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="*" element={<NotFound />} />
      {/* <Route path='/mockapi' element={<MockapiFetch/>}/> */}
    </RoutesReact>
  );
};

export default Routes;
