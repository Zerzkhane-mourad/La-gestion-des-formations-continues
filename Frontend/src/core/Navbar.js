import React, { Fragment } from 'react'
import {NavLink , Navigate } from 'react-router-dom'
import { isAunthenticated } from './../helpers/Auth'
import { useDispatch , useSelector } from 'react-redux';
import { logout } from '../actions/auth';



let activeStyle = {
    color: '#1E8449'
};

const Navbar = () => {

    const { isLogin } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const signout = () => {
        dispatch(logout())
    }

    if (!isLogin) {
        return <Navigate to="/signin" />;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } className="navbar-brand" to="/">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        {!isAunthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined }  className="nav-link" to="/signin">Connexion</NavLink>
                                </li>
                            </Fragment>
                        )}
                        {isAunthenticated() && (
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={signout} >signout</NavLink>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar