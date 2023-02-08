import React from "react";

import './Footer.scss'

import mainLogo from  "../../assets/img/logo.svg"
import icon1 from '../../assets/img/icon1.svg'
import icon2 from '../../assets/img/icon2.svg'
import icon3 from '../../assets/img/icon3.svg'
import icon4 from '../../assets/img/icon4.svg'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="wrapper">
            <footer className="footer">
            <div className="footer__text">
                <p>
                    Copyright © 2010-2023 Gastro Chef S.L. Все права защищены.
                </p>
            </div>
            <div className="footer__logo">
                <img src={mainLogo} alt="#logo" />
                <p>healthy ration</p>
            </div>
            <div className="footer__contacts">
                <p>+38 (068) 949 - 49 - 19</p>
                <div className="contacts__links">
                    <div>
                        <a href="#"><img src={icon1} alt="#icon1" /></a>
                    </div>
                    <div>
                        <a href="#"><img src={icon2} alt="#icon1" /></a> 
                    </div>
                    <div>
                        <a href="#"><img src={icon3} alt="#icon1" /></a>
                    </div>
                    <div>
                        <a href="#"><img src={icon4} alt="#icon1" /></a>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}

export {
    Footer
}