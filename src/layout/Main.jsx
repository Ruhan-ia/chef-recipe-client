import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import ChefsProfile from "../pages/Home/Chefs/ChefsProfile";
import Navbar from "../Shared/Nav/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Outlet></Outlet>
     <ChefsProfile></ChefsProfile>
      <Footer></Footer>
    </div>
  );
};

export default Main;
