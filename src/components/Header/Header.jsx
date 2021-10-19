import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/flog.png';

const Header = () => {
    return (
        <div className="navbar">
           <img className="logo" src={Logo} alt="" />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/offers'>offers</Link></li>
                </ul>
            </nav>
            <div className="menu">

            </div>
        </div>
    )
}

export default Header
