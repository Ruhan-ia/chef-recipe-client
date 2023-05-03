import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import DetailsLayout from '../layout/DetailsLayout';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
             
            }
        ]
    },

    {
        path:'/details',
        element:<DetailsLayout></DetailsLayout>,
        children:[
            {
                
            }
        ]
    }

])
   

export default router;