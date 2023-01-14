import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../core/Home';
import Signin from './Signin';
import Signup from './Signup';
import ForgetPass from './ForgetPass';
import ResetPassword from './ResetPassword';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import PrivateRoute from '../helpers/PrivateRoute';
import AdminDashboard from './AdminDashboard';
import PrivateAdminRoute from '../helpers/PrivateAdminRoute';
import LivreurDashboard from './LivreurDashboard';
import PrivateLivreurRoute from '../helpers/PrivateLivreurRoute';
import NotAcces from './NotAcces';
import Formation from '../Admin/formation/Formation';
import Employe from '../Admin/Employe/Employe';



const Routs = () => {
  return (


    <Router>

      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboardssssssss' element={<Dashboard />} />


          <Route element={<PrivateAdminRoute />}>
            <Route element={<AdminDashboard />}>
              <Route path='/formation' element={<Formation />} />
              <Route path='/employe' element={<Employe />} />
            </Route>

          </Route>  


            <Route element={<PrivateLivreurRoute />}>
              <Route path='/livreur/dashboard' element={<LivreurDashboard />} />
            </Route>
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/forgetpassword' element={<ForgetPass />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
          <Route path='/notacces' element={< NotAcces />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default Routs