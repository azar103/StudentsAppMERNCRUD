import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
      <nav className="navbar navbar-inverse">
           <div className="container-fluid">
             <div className="navbar-header">
                 <a className="navbar-brand" href="#">Mern Stack App</a>
             </div>
             <ul className="nav navbar-nav navbar-right">
                 <li><Link to="/students">Students</Link></li>
                 <li><Link to="/new-student">Create Student</Link></li>
             </ul>
             </div>
      </nav>
)

export default Header;

