import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

import {FooterData} from "./FooterData";
import logo from "../../img/logo.png"

import { IconContext } from "react-icons";
import * as FiIcons from "react-icons/fi";

const Footer = () => {

    return (
        <>
            <IconContext.Provider value={{ className: 'react-icons-footer' }}>
                <div className="footer">
                    <div className="footer-section">
                        <div className="footer-desktop-states">

                            <Link to='/' className="footer-logo" >
                                <img src={logo} className="footer-logo-pic" alt="logo"/>
                            </Link>

                            <div className="footer-desktop-item">
                                {FooterData.map(({id,  path,  title}) => {
                                    return (
                                        <div key={id} className="footer-desktop-box">
                                            <Link to={path} className="footer-desktop-link" >
                                                <div className="footer-desktop-h2">
                                                    <button className="footer-desktop-button">
                                                        <h2 className="footer-desktop-h2-h2">
                                                            {title}
                                                        </h2>
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="footer-social-icon">
                            <Link to='/' className="footer-social-icon-link" >
                                <FiIcons.FiInstagram/>
                            </Link>
                            <Link to='/' className="footer-social-icon-link" >
                                <FiIcons.FiYoutube/>
                            </Link>
                            <Link to='/' className="footer-social-icon-link" >
                                <FiIcons.FiFacebook/>
                            </Link>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Footer;
