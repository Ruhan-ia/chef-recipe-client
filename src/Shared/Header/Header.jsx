import React from "react";
import bg from "../../images/bg-1.jpg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div
        style={{ backgroundSize: "cover", backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center text-5xl text-amber-300">here we serve italian food</h1>
      </div>
    </div>
  );
};

export default Header;
