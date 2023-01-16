import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import ResetPassword from './ResetPassword';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import PrivateRoute from '../helpers/PrivateRoute';
import AdminDashboard from './AdminDashboard';
import PrivateAdminRoute from '../helpers/PrivateAdminRoute';
import PrivateEmployeRoute from '../helpers/PrivateEmployeRoute';
import NotAcces from './NotAcces';
import Formation from '../Admin/Formation';
import Employe from '../Admin/Employe';
import Organisme from '../Admin/Organisme';
import Statistique from '../Admin/Statistique';
import EmployePage from './EmployePage';





const Routs = () => {
  return (


    <Router>

      <Routes>

        <Route element={<PrivateRoute />}>
          <Route element={<PrivateAdminRoute />}>
            <Route element={<AdminDashboard />}>
              <Route path='/' element={<Statistique />} />
              <Route path='/admin/formation' element={<Formation />} />
              <Route path='/admin/employe' element={<Employe />} />
              <Route path='/admin/organisme' element={<Organisme />} />
              <Route path='/admin/statistique' element={<Statistique />} />
            </Route>
          </Route>

          <Route element={<PrivateEmployeRoute />}>
            <Route path='/employe' element={<EmployePage />} />
          </Route>
        </Route>

        <Route path='/signin' element={<Signin />} />
        <Route path='/notacces' element={< NotAcces />} />
        <Route path='*' element={<NotFound />} />
     
      </Routes>
   
    </Router>

  );
}

export default Routs