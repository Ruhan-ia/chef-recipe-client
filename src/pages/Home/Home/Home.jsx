import React from "react";

import food1 from "../../../images/food-1.jpg";
import food2 from "../../../images/food-2.jpg";
import food3 from "../../../images/food-3.jpg";

const Home = () => {
  return (
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
