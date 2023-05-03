import React, { useEffect, useState } from 'react';
import Profile from '../profile/Profile';

const ChefsProfile = () => {
    const [profile, setProfile] = useState([])

    useEffect(() =>{
        fetch('http://localhost:4000/chef')
        .then(res=>res.json())
        .then(data => setProfile(data))
        .catch(error =>{
            console.log(error.message)
        })
    }, [])
    return (
        <div>
            {
            
            profile.map(pr => <Profile key={pr.id} pr = {pr}></Profile>)
            
            
            }
                   
           
     
        </div>
    );
};

export default ChefsProfile;