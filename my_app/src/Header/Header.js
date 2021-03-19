/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import "./Header.css";

const Header = (props) => {
    const {t,i18n} = useTranslation('translation');
    const changeLanguage = code => {
        i18n.changeLanguage(code);
    }
    return (
        <header>
            <div id="logo-container">
                <img id="logo" src="/img/logo-aventure.svg" alt="Logo aventure"/>
                <div id="hdr">
                    <p id="sitetitle">{t('header.title')}</p>
                    <p id="subtitle">{t('header.subtitle')}</p>
                </div>
            </div>
            <div className="change-language">
                <button type="button" onClick={()=>changeLanguage('fr')}>{t('language.french')}</button>
                <button type="button" onClick={()=>changeLanguage('en')}>{t('language.english')}</button>
            </div>
            <nav>
                <ul className="links">
                    <li>
                        <NavLink id="home-link" exact={true} activeClassName="active" to="/">{t('header.Home')}</NavLink>
                    </li>
                    <li>
                        <NavLink id="articles-link" activeClassName="active" to="/articles">{t('header.Articles')}</NavLink>
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
