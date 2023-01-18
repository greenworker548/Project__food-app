import React from "react";
import { NavLink } from 'react-router-dom'

import './Header.scss'

import mainLogo from  "../../assets/img/logo.svg"


const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <div className="header__logo">
                    <img src={mainLogo} alt="#logo" />
                    <p>healthy ration</p>
                </div>
            </NavLink>
            <div className="header__nav">
                <ul>
                    <NavLink to="/shop"><li>Магазин</li></NavLink>
                    <NavLink to="/blog"><li>Блог</li></NavLink>
                    <NavLink to="/about"><li>О нас</li></NavLink>
                </ul>
            </div>
            <div className="header__tel">
                <p>+38 (068) 949 - 49 - 19</p>
            </div>
        </header>
    )
}

export {
    Header
}