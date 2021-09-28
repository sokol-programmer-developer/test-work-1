import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../../img/logo.png"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {NavbarData} from "./NavbarData";
import { IconContext } from "react-icons";

const Navbar = () => {


    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const closeMobileMenu = () => setSidebar(false);
    return (
        <>
                <div className="navbar">
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div className="navbar-desktop-states">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={logo} className="navbar-logo-pic" alt="logo"/>
                        </Link>
                        <div className="nav-desktop-item">
                            {NavbarData.map(({id,  path,  title}) => {
                                return (
                                    <div key={id} className="nav-desktop-box">
                                        <Link to={path} className="nav-desktop-link" onClick={closeMobileMenu} >
                                            <div className="nav-desktop-h2">
                                                <button className="nav-desktop-button">
                                                    <h2 className="nav-desktop-h2-h2">
                                                        {title}
                                                    </h2>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="nav-language">
                            <Link to='/' className='nav-language-box' onClick={closeMobileMenu}>
                                <h2 className='nav-language-h2'>RU</h2>
                            </Link>
                            <Link to='/' className='nav-language-box' onClick={closeMobileMenu}>
                                <h2 className='nav-language-h2'>EN</h2>
                            </Link>
                        </div>
                    </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: 'react-icons-mobile' }}>
                    <div className="navbar-mobile-states">
                        <Link to="#" className="menu-bars-open">
                            <FaIcons.FaBars className='navbar-mobile-icon-close' onClick={showSidebar}/>
                        </Link>
                        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

                            <div className="nav-menu-items">
                                <div className="navbar-toggle">
                                    <Link to="#" className="menu-bars-close">
                                        <AiIcons.AiOutlineClose  className='navbar-mobile-icon-close' onClick={showSidebar}/>
                                    </Link>
                                </div>
                                {NavbarData.map(({id,  path,  title}) => {
                                    return (
                                        <div key={id} className='navbar-mobile-box' >
                                            <Link to={path} className='navbar-mobile-link' onClick={closeMobileMenu}>
                                                <div className='navbar-mobile-div-h2'>
                                                    <button className='navbar-mobile-button-h2' >
                                                        <h2 className='navbar-mobile-h2-h2'>
                                                            {title}
                                                        </h2>
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>

                        </nav>
                    </div>
                    </IconContext.Provider>
                </div>
        </>
    );
}

export default Navbar;
