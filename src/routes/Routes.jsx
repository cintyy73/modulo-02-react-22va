import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";
import Home from "../pages/Home";
import CardDetails from "../components/CardDetails";
const Routes = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<CardDetails/>}/>
    </RoutesReact>
  );
};

export default Routes;
