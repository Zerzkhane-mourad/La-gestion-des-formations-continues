import React from 'react';
import { isAunthenticated } from '../helpers/Auth';

const LivreurDashboard = () => {

    const {  user } = isAunthenticated()

    return (

        <div className="mt-4">

            <h1>Dashboad Livreur</h1>
            <h2>Username:   <b>{user.username}</b></h2>
            <h2>Email:   <b>{user.email}</b></h2>
            <h2>Role:   <b>{user.role}</b></h2>

        </div>
    )
}

export default LivreurDashboard