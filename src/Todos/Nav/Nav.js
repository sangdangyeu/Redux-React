import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <div className="topnav">
                {/* <NavLink to="/" activeClassName="active" exact={true}>
                    Homes
                </NavLink>
                <NavLink to="/Todos" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/Contact" activeClassName="active">
                    Contact
                </NavLink> */}

                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Homes
                    </NavLink>
                    <NavLink to="/Todos" activeClassName="active">
                        Todos
                    </NavLink>
                    <NavLink to="/Contact" activeClassName="active">
                        Contact
                    </NavLink>
                    <NavLink to="/User" activeClassName="active">
                        User
                    </NavLink>
                </div>
                {/* <a className="active" href="/">Homes</a>
                <a href="/Todos">Todos</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a> */}
            </div>
        </>
    );
}
export default Nav;