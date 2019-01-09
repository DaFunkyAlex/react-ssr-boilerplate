import React from 'react';
import {NavLink} from "react-router-dom";
import styler from "../../helpers/styler";

const Navigation = () => {
    return (
        <aside className={styler(["menu"])}>
            <div className={styler(["brand"])}>React Boilerplate</div>
            <nav>
                <ul className={styler(["nav-menu"])}>
                    <li><NavLink exact to="/" activeClassName={styler(["active"])}>Home</NavLink></li>
                    <li><NavLink to="/article" activeClassName={styler(["active"])}>Article</NavLink></li>
                    <li><NavLink to="/redirect" activeClassName={styler(["active"])}>Redirect Link</NavLink></li>
                    <li><NavLink to="/notfound" activeClassName={styler(["active"])}>404</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
};

export default Navigation;