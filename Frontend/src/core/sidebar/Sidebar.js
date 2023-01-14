import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/style.css'

export default function Sidebar() {
  return (
     
        <nav id="sidebar" className="active">
          <h1><NavLink to="" className="logo mt-3">M.</NavLink></h1>
          <ul className="list-unstyled components mt-5">
            <li className="active">
              <NavLink to="#"><span className="fa fa-home "></span>Statistique</NavLink>
            </li>
            <li>
              <NavLink to="#"><span className="fa fa-user"></span>Profil</NavLink>
            </li>
            <li>
              <NavLink to="#"><span className="fa fa-sticky-note"></span>Commande</NavLink>
            </li>
          </ul>
        </nav>

   
  )
}
