import React from "react";
import { Outlet } from "react-router";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
