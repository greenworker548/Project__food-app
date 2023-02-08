import { title } from "process";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCard } from "../../redux/actionCreators/cartActionCreators";
import Button from "../Button/Button";

import './CardShop.scss'

type CardShopType = {
    linkImage?: string,
    title: string,
    description: string,
    price: number,
    id: any
}

const CardShop = ({linkImage, title, description, price, id}: CardShopType) => {
    const dispatch = useDispatch()
    const arr = useSelector((state: any) => state.cartReducers)

    return (
        <div className="card" id={id}>
            <div className="card__image">
                <img src={linkImage} alt="#card-image" />
            </div>
            <p className="card__title">
                {title}
            </p>
            <p className="card__price">
                {`${price} р.`}
            </p>
            <div className="card__nav">
                <Button text="Добавить в корзину" className="button-add-cart" onClick={() => dispatch(addCard({title, price, id}))} />
            </div>
        </div>
    )
}

export { CardShop }