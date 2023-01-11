import React  from 'react'
import {Outlet , Navigate} from "react-router-dom";
import { isAunthenticated } from "./Auth";

const PrivateAdminRoute = () => {

    return(

    isAunthenticated() && isAunthenticated().user.role === 'admin'? <Outlet/> : <Navigate to= "/notacces" />

    )
            
}

export default PrivateAdminRoute;