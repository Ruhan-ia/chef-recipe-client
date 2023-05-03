import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import ChefsProfile from "../pages/Home/Chefs/ChefsProfile";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
     <ChefsProfile></ChefsProfile>
      <Footer></Footer>
    </div>
  );
};

export default Main;
