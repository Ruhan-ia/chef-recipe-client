import React from "react";
import bg from "../../images/bg-1.jpg";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        height: "800px",
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="navbar">
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
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>ABOUT 2</a>
              </li>

              <li>
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
            <li  className="text-white font-bold">
              <a>Home</a>
            </li>
            <li  className="text-white font-bold">
              <a>About</a>
            </li>
            <li  className="text-white font-bold">
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <p className="me-5 text-4xl text-white">
            <BiUserCircle></BiUserCircle>
          </p>
          <a className="btn">Login</a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-items-center">
        <h1 className="text-center text-5xl items-center text-amber-300 font-bold">
          HERE WE SERVED YOUR CHOICE!!
        </h1> <br />
        <p className="text-center py-8 items-center text-yellow-300 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          neque perspiciatis asperiores earum nulla soluta maiores dolore sequi
          distinctio harum possimus dignissimos eveniet eligendi molestiae
          quidem repudiandae, suscipit doloremque ea.
        </p>
      </div>
    </div>
  );
};

export default Header;
