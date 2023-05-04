import React from "react";
import bg from "../../images/bg-2.jpg";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex  items-center justify-center"
      style={{
        backgroundSize: "cover",
        height: "1000px",
        backgroundImage: `url(${bg})`,
      }}
    >
     
      <div>
        <h1 className="text-center font-extrabold text-6xl pb-4">WEL<span className="text-fuchsia-800">C</span>O<span className="text-sky-700">M</span><span className="text-white">E</span>  !<span className="text-amber-700">!</span>!</h1>
        <h1 className="text-center text-5xl  text-teal-500 font-bold">
          HERE WE SERVED YOUR CHOICE!!
        </h1> <br />
        <p className="text-center py-8   text-white font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Aliquid
          neque perspiciatis asperiores earum nulla soluta maiores dolore sequi
          distinctio harum possimus dignissimos
          <br /> eveniet eligendi molestiae
          quidem repudiandae, suscipit doloremque ea.
        </p>
    </div>
    </div>
  );
};

export default Header;
