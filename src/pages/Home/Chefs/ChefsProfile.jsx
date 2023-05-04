import React, { useEffect, useState } from 'react';
import Profile from '../profile/Profile';

const ChefsProfile = () => {
    const [profile, setProfile] = useState([])

    useEffect(() =>{
        fetch('https://italian-food-server-ruhan-ia.vercel.app/chef')
        .then(res=>res.json())
        .then(data => setProfile(data))
        .catch(error =>{
            console.log(error.message)
        })
    }, [])
    return (
        <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-20 w-[85%]   mx-auto'>
            {
            
            profile.map(pr => <Profile key={pr.id} pr = {pr}></Profile>)
            
            
            }
                
                    
                  
           
     
        </div>
    );
};

export default ChefsProfile;