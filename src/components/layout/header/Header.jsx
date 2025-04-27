import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className="site-navbar bg-white py-2">

                <div className="search-wrap">
                    <div className="container">
                        <a href="javascript:void(0)" className="search-close js-search-close"><span className="icon-close2"></span></a>
                        <form action="#" method="post">
                            <input type="text" className="form-control" placeholder="Search keyword and hit enter..."/>
                        </form>
                    </div>
                </div>

                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <div className="site-logo">
                                <Link to="/" className="js-logo-clone">Dealers</Link>
                            </div>
                        </div>
                        <div className="main-nav d-none d-lg-block">
                            <nav className="site-navigation text-right text-md-center" role="navigation">
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="has-children active">
                                        <a href="javascript:void(0)">Collection</a>
                                        <ul className="dropdown">
                                            <li><a href="javascript:void(0)">Men</a></li>
                                            <li><a href="javascript:void(0)">Women</a></li>
                                            <li><a href="javascript:void(0)">Children</a></li>
                                            <li className="has-children">
                                                <a href="javascript:void(0)">Sub Menu</a>
                                                <ul className="dropdown">
                                                    <li><a href="javascript:void(0)">Men</a></li>
                                                    <li><a href="javascript:void(0)">Women</a></li>
                                                    <li><a href="javascript:void(0)">Children</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a href="javascript:void(0)">Shop</a></li>
                                    <li><a href="javascript:void(0)">Catalogs</a></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="icons">
                            <Link to="/dashboard" className="icons-btn d-inline-block bag" style={{fontSize: '30px'}}>
                                <span className="icon-person_outline"></span>
                            </Link>
                            <a href="javascript:void(0)" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                className="icon-menu"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
