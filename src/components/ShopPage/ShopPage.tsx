import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchShop } from "../../redux/actionCreators/shopActionCreators";
import Button from "../Button/Button";
import { CardShop } from "../CardShop/CardShop";


import './ShopPage.scss'

const ShopPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchShop())
    },[])
        
    const arrShop = useSelector((state: any) => state.shopReducer.data)

    return (
        <div className="shop-page">
          <div className="shop__nav">
            <NavLink to="/">
              <Button text="< Назад" className="button-nav" />
            </NavLink>
          </div>
          <div className="shop__list">
            {arrShop.map((item: any)=> <CardShop linkImage={item.linkImage} title={item.title} description={item.description} price={item.price} id={item.id} key={item.id}/>)}
          </div>
        </div>
    )
}

export default ShopPage