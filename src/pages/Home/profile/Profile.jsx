import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({pr}) => {
    const {chef, experience, numRecipes, id} = pr;
    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className='text-3xl font-semibold'>{chef}</h2>
            <p className='font-bold'>Years Of Experience: <span className='font-bold'>{experience}</span> </p>
            <p className='font-semibold'>Number Of Recipes: {numRecipes}</p>
            <div className="card-actions justify-end">
             <Link to={`/details/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
            </div>
          </div>
        </div>
           
        </div>
    );
};

export default Profile;