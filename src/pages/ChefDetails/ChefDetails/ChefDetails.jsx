import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const details = useLoaderData();
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    if (fav == true) {
        
      setFav(<div className="toast">
      <div className="alert alert-info">
        <div>
          <span>Add to favorite list.</span>
        </div>
      </div>
    </div>)
    }
  };
  console.log(details);
  const { imgUrl, bio, likes, numRecipes, experience, chef, recipes } = details;
  return (
    <div className="w-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-auto rounded">
            <img src={imgUrl} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{chef}</h2>
          <p className="font-bold">Bio: {bio}</p>
          <p className="font-bold">
            Years Of Experience: <span className="font-bold">{experience}</span>{" "}
          </p>
          <p className="font-semibold">Number Of Recipes: {numRecipes}</p>
          <p className="font-bold">Likes:{likes}</p>
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-20 w-[85%] h-auto  mx-auto">
        {recipes.map((rp) => (
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-3xl font-bold">
                  Recipe Name:{" "}
                  <span className="text-2xl font-semibold">{rp.name}</span>{" "}
                </h2>
                <br />
                {rp.ingredients.map((li) => (
                  <ul className="list-disc">
                    {" "}
                    <li>{li}</li>
                  </ul>
                ))}
                <p className="font-semibold">
                  {" "}
                  <span className="text-2xl font-bold">
                    Cooking Method
                  </span>: {rp.cookingMethod}
                </p>
                <p>{rp.rating}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleFav} disabled={!fav}
                    className="btn btn-outline btn-accent"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
