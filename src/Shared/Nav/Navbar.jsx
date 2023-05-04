import React, { useContext } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const{user, logout} = useContext(AuthContext)
    const handleLogOut =() =>{
        logout
        .then(()=>{

        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
             <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li  className=" font-bold text-orange-400">
                <Link to='/'>Home</Link>
              </li>
              <li  className=" font-bold text-orange-400">
                <a>ABOUT</a>
              </li>

              <li  className=" font-bold text-orange-400">
                <a>BLOG</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            ITALIAN FOOD
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li  className=" font-bold">
            <Link to='/home'>Home</Link>
            </li>
            <li  className=" font-bold">
              <a>About</a>
            </li>
            <li  className=" font-bold">
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
         {user && <p className="me-5 text-4xl">
            <BiUserCircle></BiUserCircle>
          </p>}
         
        </div>
       <div>
       {user ? <Link className='btn'><button onClick={handleLogOut} className='btn'>Log Out</button></Link> :
          <Link to='/login' className='btn'><button  className='btn'>Login</button></Link>}
       </div>
      </div>
        </div>
    );
};

export default Navbar;