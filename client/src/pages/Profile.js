import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function Profile(){
    return (
        <>
          <div className="container my-1">
            <Link to="/">← Back to Home</Link>
            <Link to="/add-property">Add Property</Link>
          </div>
        </>)
            
}

export default Profile;