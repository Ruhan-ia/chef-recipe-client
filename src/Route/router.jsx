import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import DetailsLayout from '../layout/DetailsLayout';
import ChefDetails from '../pages/ChefDetails/ChefDetails/ChefDetails';
import Login from '../pages/Login/Login/Login';
import LoginLayout from '../layout/LoginLayout';
import Register from '../pages/Login/Register';
import PrivateRoutes from './PrivateRoutes';
import Blog from '../pages/Blog/Blog';


const router = createBrowserRouter([


    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
              path:'/',
              element:<Navigate to='/home'></Navigate>  
            },
            {
                path:'/login',
                element:<Login></Login>
            },
         {  path:'/register',
            
            element:<Register></Register>
        
         },
         {
            path:'/blog',
            element:<Blog></Blog>
         }
        ]

    },
    {
        path:'/home',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
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
                element:<PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader:({params}) => fetch(`https://italian-food-server-ruhan-ia.vercel.app/chef/${params.id}`)
            }
           
        ]
    }

])
   

export default router;