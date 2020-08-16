/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import logo from './logo.svg';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Index from '../pages/Index'
import Generic from '../pages/Generic'
import Elements from '../pages/Elements'
function Header (){
	return (
		<HashRouter>
            <header id="header">
                <div className="inner">
                    <NavLink exact to="/" className="logo">introspect</NavLink>
                    <nav id="nav">
                        <NavLink exact to="/">HOME</NavLink>
                        <NavLink to="/generic">GENERIC</NavLink>
                        <NavLink to="/elements">ELEMENTS</NavLink>
                    </nav>
                </div>
            </header>
            <a href="#menu" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            <div className="content">
                <Route exact path="/" component={Index}/>
                <Route path="/generic" component={Generic}/>
                <Route path="/elements" component={Elements}/>
            </div>
        </HashRouter>
	);
}

export default Header;
