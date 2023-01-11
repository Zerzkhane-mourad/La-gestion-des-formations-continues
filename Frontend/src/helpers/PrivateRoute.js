import React  from 'react'
import {Outlet, Navigate} from "react-router-dom";
import { isAunthenticated } from "./Auth";

const PrivateRoute = () => (

    isAunthenticated() ? <Outlet/> : <Navigate to= "/signin" />

);

export default PrivateRoute;

