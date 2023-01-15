import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/style.css'

export default function Sidebar() {
  return (
     
        <nav id="sidebar" className="active">
          <h1><NavLink to="" className="logo mt-3">M.</NavLink></h1>
          <ul className="list-unstyled components mt-5">
            <li className="active">
              <NavLink to="/statistique"><span className="fa fa-home "></span>Statistique</NavLink>
            </li>
            <li>
              <NavLink to="/employe"><span className="fa fa-users"></span>Employe</NavLink>
            </li>
            <li>
              <NavLink to="/organisme"><span className="fa fa-graduation-cap"></span>Organisme</NavLink>
            </li>
            <li>
              <NavLink to="/formation"><span className="fa fa-book"></span>Formation</NavLink>
            </li>
            <li className='mt-5 pt-5'>
              <NavLink to="#"><span className="fa fa-sign-out"></span>Logout</NavLink>
            </li>

          </ul>
        </nav>

   
  )
}
