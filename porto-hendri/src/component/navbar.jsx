import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar-custom">
            <NavLink exact className="nav-link" activeClassName="active" to="/"><i className="bi bi-house-door-fill"></i></NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/about"><i className="bi bi-info-circle-fill"></i></NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/porto"><i className="bi bi-person-fill"></i></NavLink>
        </div>
    );
}

export default Navbar;
