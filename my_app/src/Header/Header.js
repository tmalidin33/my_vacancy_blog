/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
    return (
        <header>
            <div id="logo-container">
                <img id="logo" src="/img/logo-aventure.svg" alt="Logo aventure"/>
                <div id="hdr">
                    <p id="sitetitle">Aventure</p>
                    <p id="subtitle">L'escape à portée d'aile</p>
                </div>
            </div>
            <nav>
                <ul className="links">
                    <li>
                        <NavLink id="home-link" exact={true} activeClassName="active" to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink id="articles-link" activeClassName="active" to="/articles">Articles</NavLink>
                    </li>
                    <li>
                        {/* <NavLink id="search-link"></NavLink> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
