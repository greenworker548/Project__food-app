import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

import './CardShop.scss'

type CardShopType = {
    linkImage?: string,
    title: string,
    description: string,
    id: any
}

const CardShop = ({linkImage, title, description, id}: CardShopType) => {
    return (
        <div className="card" id={id}>
            <div className="card__image">
                <img src={linkImage} alt="#card-image" />
            </div>
            <p className="card__title">
                {title}
            </p>
            <div className="card__nav">
                <p className="card__date">
                    {description}
                </p>
                {/* <NavLink to="/blog/post">
                    <Button text="Подробнее" className="button-blog-page"/>
                </NavLink> */}
            </div>
        </div>
    )
}

export { CardShop }