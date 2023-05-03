import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import DetailsLayout from '../layout/DetailsLayout';
import ChefDetails from '../pages/ChefDetails/ChefDetails/ChefDetails';


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
                path:':id',
                element:<ChefDetails></ChefDetails>,
                loader:({params}) => fetch(`http://localhost:4000/chef/${params.id}`)
            }
        ]
    }

])
   

export default router;