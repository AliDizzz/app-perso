import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">Navbar</span>
            

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink>
                            <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                            </a>
                        </NavLink>
                    </li>
                    
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;