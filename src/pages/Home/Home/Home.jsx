import React from "react";

import food1 from "../../../images/food-1.jpg";
import food2 from "../../../images/food-2.jpg";
import food3 from "../../../images/food-3.jpg";
import food4 from "../../../images/food-4.jpg";

const Home = () => {
  return (
    <div>
    <h2 className="font-extrabold text-5xl text-center text-green-800 py-10">Our Special Dishes</h2>
    <hr />

    <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-20 w-[85%]   mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-auto rounded">
            <img src={food1} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
          NEW!
            <div className="badge badge-secondary">SPECIAL</div>
          </h2>
          <p>Parmigiano Reggiano Five Ages</p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-auto rounded">
            <img src={food2} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
          NEW!
            <div className="badge badge-secondary">SPECIAL</div>
          </h2>
          <p>Spaghetti Carbonara</p>
         
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-auto rounded">
            <img src={food3} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            NEW!
            <div className="badge badge-secondary">SPECIAL</div>
          </h2>
          <p>Fettuccine Alfredo</p>
        
        </div>
      </div>
    </div>

    <section className="my-10">
     
      <h2 className="text-6xl font-extrabold text-center text-orange-600 py-10 ">Our Responsibilities</h2>
      <hr />
      <div className="mx-auto w-[85%] gap-12 grid lg:grid-cols-2  sm:grid-cols-1 ">

        <h1 className=" my-auto font-extrabold text-6xl">YO<span className="text-fuchsia-600">U</span><span className="text-yellow-600">R</span> <br /> <br /> <span className="text-purple-500">CHOICE</span> <span className="text-indigo-400">O</span>UR <br /> <br /> <span className="text-emerald-400">PRI</span>O<span className="text-orange-400">R</span>ITY</h1>
          <div className=" w-auto my-auto ">
          <img className="h-3/4 my-auto w-auto shadow-md rounded-md" src={food4} alt="" />
          </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
