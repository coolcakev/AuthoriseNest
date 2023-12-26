import React from 'react';
import './Navbar.module.css';
import {Link} from "react-router-dom";

const navLink= [
    {
        text: 'Dashboard',
        href: '/'
    },
    {
        text: 'Login',
        href: '/login'
    },
    {
        text: 'Register',
        href: '/register'
    },
]
const Navbar = () => {
    return (
        <nav >
            <ul>
                {navLink.map(({text, href}) => (
                    <li key={href}>
                        <Link to={href}>{text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;