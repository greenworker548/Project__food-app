import React from "react";

import './HomePage.scss'

import main_img from '../../assets/img/main_img.png'
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page__content">
                <h1 className="content__title">Сервис правильного питания.</h1>
                <p className="content__description">Худей быстро!</p>
                <div className="content__order">
                    <NavLink to='/shop'>
                    <Button text="Заказать" className="button-home-page" />
                    </NavLink>
                    <div className="orfer__sale">
                        <p className="sale__description">Натурально</p>
                        <p className="sale__number">100%</p>
                    </div>
                </div>
            </div>
            <div className="home-page__illustration">
                <img src={main_img} alt="#main_img" />
            </div>
        </div>
    )
}

export {
    HomePage
}