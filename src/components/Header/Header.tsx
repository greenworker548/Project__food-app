import React from "react";
import { NavLink } from 'react-router-dom'

import './Header.scss'

import mainLogo from  "../../assets/img/logo.svg"
import { useSelector } from "react-redux";


const Header = () => {
    const countCart = useSelector((state: any) => state.cartReducers).length

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
                    <NavLink to="/shop"><li className="nav__item">Магазин</li></NavLink>
                    <NavLink to="/blog"><li className="nav__item">Блог</li></NavLink>
                    <NavLink to="/about"><li className="nav__item">О нас</li></NavLink>
                </ul>
            </div>
            <div className="header__tel">
                <p>+38 (068) 949 - 49 - 19</p>
            </div>
            <div className="header__subnav">
                <div className="header__subnav__registration">
                    <NavLink to='/signin'>
                        <button className="registration__button">
                            Войти
                        </button>
                    </NavLink>
                    <NavLink to="/signup">
                        <button className="registration__button">
                            Регистрация
                        </button>
                    </NavLink>
                </div>
                <NavLink to="/cart">
                <div className="header__subnav__cart">
                    <p>Корзина:</p>
                    <div className="cart__count">
                        {countCart}
                    </div>
                </div>
                </NavLink>
            </div>
        </header>
    )
}

export {
    Header
}