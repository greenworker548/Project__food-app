import React from "react";

import './HomePage.scss'

import main_img from '../../assets/img/main_img.png'
import Button from "../Button/Button";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page__content">
                <h1 className="content__title">Сервис правильного питания.</h1>
                <p className="content__description">Худей быстро!</p>
                <div className="content__order">
                    <Button text="Заказать" className="button-home-page"/>
                    <div className="orfer__sale">
                        <p className="sale__description">По промокоду</p>
                        <p className="sale__number">-10%</p>
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