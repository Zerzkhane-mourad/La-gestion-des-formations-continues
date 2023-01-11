import React from 'react';
import { isAunthenticated } from '../helpers/Auth';
import AddLivreur from '../Admin/livreur/AddLivreur';

const AdminDashboard = () => {

    const { user } = isAunthenticated()

    return (
        <div className="ms-3 mt-3">
            <h1>Dashboard Admin</h1>
            <h2>Username:   <b>{user.username}</b></h2>
            <h2>Email:   <b>{user.email}</b></h2>
            <h2>Role:   <b>{user.role}</b></h2>


            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5  text-center" id="exampleModalToggleLabel">Create New Livreur</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AddLivreur />
                        </div>

                    </div>
                </div>
            </div>
            <a className="btn btn-dark" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Add livreur</a>
        </div>
    )
}

export default AdminDashboard