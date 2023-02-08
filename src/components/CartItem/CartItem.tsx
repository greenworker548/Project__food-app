import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemCart } from "../../redux/actionCreators/cartActionCreators";
import Button from "../Button/Button";

import './CartItem.scss'

type CartItems = {
    title: string,
    price: number,
    id: number,
    key?: number
}

const CartItem = ({title, price, id, key}: CartItems) => {
    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <p>
                {title}
            </p>
            <p>
                {`${price} р.`}
            </p>
            <Button text="X" className="button-delete-item-cart" onClick={() => dispatch(deleteItemCart(id))}/>
        </div>
    )
}

export default CartItem