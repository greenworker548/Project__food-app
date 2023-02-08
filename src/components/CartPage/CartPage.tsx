import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { idText } from "typescript";
import { deleteAllCart } from "../../redux/actionCreators/cartActionCreators";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import CartNull from "../CartNull/CartNull";

import './CartPage.scss'

const CartPage = () => {
    const dispatch = useDispatch()
    const arr = useSelector((state: any) => state.cartReducers)
    const sumPrice = arr.reduce((sum: number, item: any) => sum + item.price, 0)

    return (
        <div className="cart-page">
            <ul className="cart-page__list">
                {arr.length == 0 ? <CartNull text="Ваша корзина пуста!"/> : arr.map((item: any, index: any) => <li className="list__item"> <CartItem title={item.title} price={item.price} id={item.id} /> </li> )}
            </ul>
            <p className="cart-page__sum">
                {arr.length == 0 ? <div></div> : `Итого: ${sumPrice} p.`}
            </p>
            <div className="cart-page__nav">
                {arr.length == 0 ? <div></div> : <NavLink to='/'><Button text="Отправить" className="button-add-cart" onClick={() => dispatch(deleteAllCart())} /></NavLink>}
                {arr.length == 0 ? <div></div> : <Button text="Очистить корзину" className="button-delete-all-cart" onClick={() => dispatch(deleteAllCart())} />}
            </div>
        </div>
    )
}

export default CartPage