import React from 'react'
import { NavLink ,Navigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import './css/style.css'

export default function Sidebar() {

  const { isLogin } = useSelector(state => state.auth);
  const dispatch = useDispatch()

  const signout = () => {
      dispatch(logout())
  }

  if (!isLogin) {
      return <Navigate to="/signin" />;
  }
  return (
     
        <nav id="sidebar" className="active">
          <h1><NavLink to="" className="logo mt-3">M.</NavLink></h1>
          <ul className="list-unstyled components mt-5">
            <li className="active">
              <NavLink to="/admin/statistique"><span className="fa fa-home "></span>Statistique</NavLink>
            </li>
            <li>
              <NavLink to="/admin/employe"><span className="fa fa-users"></span>Employe</NavLink>
            </li>
            <li>
              <NavLink to="/admin/organisme"><span className="fa fa-graduation-cap"></span>Organisme</NavLink>
            </li>
            <li>
              <NavLink to="/admin/formation"><span className="fa fa-book"></span>Formation</NavLink>
            </li>
            <li className='mt-5 pt-5'>
              <NavLink onClick={signout}><span className="fa fa-sign-out"></span>Logout</NavLink>
            </li>

          </ul>
        </nav>

   
  )
}
