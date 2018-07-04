import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = props => (
    <nav className='navbar navbar-expand-lg navbar-light ' >
            <Link className='navbar-bar' to='/'>
                Home
            </Link>

            <div >
                <ul className="navbar-nav">
                    <li>
                        <Link to='/' className='nav-link'>
                            About
                    </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-link'>
                            Twitter
                    </Link>
                    </li>
                </ul>
            </div>
    </nav>
);

export default Navbar;



