/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import { Navbar, NavDropdown } from 'react-bootstrap';

const Header = (props) => {
    const { t, i18n } = useTranslation('translation');
    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };
    const currentLanguage = i18n.language;
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <div id="logo-container">
                        <img id="logo" src="/img/logo-aventure.svg" alt="Logo aventure" />
                        <div id="hdr">
                            <p id="sitetitle">{t('header.title')}</p>
                            <p id="subtitle">{t('header.subtitle')}</p>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                id="home-link"
                                exact={true}
                                data-testid="home-label"
                                activeClassName="active"
                                to="/"
                            >
                                {t('header.Home')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                id="articles-link"
                                data-testid="article-label"
                                activeClassName="active"
                                to="/articles"
                            >
                                {t('header.Articles')}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                id="users-link"
                                data-testid="user-label"
                                activeClassName="active"
                                to="/users"
                            >
                                {t('header.Users')}
                            </NavLink>
                        </li>
                        <NavDropdown
                            title={
                                currentLanguage === 'fr' ? (
                                    <>
                                        <span className="flag-icon flag-icon-fr"></span> Francais
                                    </>
                                ) : (
                                    <>
                                        <span className="flag-icon flag-icon-gb"></span> English
                                    </>
                                )
                            }
                            id="basic-nav-dropdown"
                            data-testid="lg-dropdown"
                        >
                            <NavDropdown.Item onClick={() => changeLanguage('fr')}>
                                <span className="flag-icon flag-icon-fr"></span>{' '}
                                {t('language.french')}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage('en')}>
                                <span className="flag-icon flag-icon-gb"></span>{' '}
                                {t('language.english')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <div className="change-language">
        //                 <button type="button" onClick={()=>changeLanguage('fr')}>{t('language.french')}</button>
        //                 <button type="button" onClick={()=>changeLanguage('en')}>{t('language.english')}</button>
        //             </div> */}
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
