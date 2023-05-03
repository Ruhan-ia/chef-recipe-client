import React from 'react';
import Header from '../Shared/Header/Header';
import ChefsProfile from '../pages/Home/Chefs/ChefsProfile';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <Header></Header>
            <ChefsProfile></ChefsProfile>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;