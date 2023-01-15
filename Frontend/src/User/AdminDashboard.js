import React from 'react';
import Sidebar from '../core/sidebar/Sidebar';
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {

  return (
    <div className="wrapper d-flex ">

      <Sidebar />
      <div id="content" className="p-md-5">
        <button type="button" id="sidebarCollapse" className="btn btn-primary">
          <i className="fa fa-bars"></i>
        </button>
        <Outlet />
      </div>



    </div>
  )
}

export default AdminDashboard