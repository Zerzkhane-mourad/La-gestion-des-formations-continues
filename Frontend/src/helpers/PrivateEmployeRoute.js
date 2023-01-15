import React  from 'react'
import {Outlet , Navigate} from "react-router-dom";
import { isAunthenticated } from "./Auth";

const PrivateLivreurRoute = () => {
    
    return(

        isAunthenticated() && isAunthenticated().user.role === 'employe'? <Outlet/> : <Navigate to= "/notacces" />
    
    )

}    

export default PrivateLivreurRoute;