import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import FullPost from "../FullPost/FullPost";

import './FullPostPage.scss'

const FullPostPage = () => {
    const arr = useSelector((state: any) => state.fullPostReducers.data)
    console.log(arr)

    return (
        <div className="full-post-page">
            <div className="full-post-page__nav">
                <NavLink to="/blog">
                    <Button text="< Назад" className="button-nav" />
                </NavLink>
            </div>
            <div className="full-post-page__list">
                {arr.map((item: any) => <FullPost linkImage={item.linkImage} title={item.title} date={item.date} description={item.description} />)}
            </div>
        </div>
    )
}

export default FullPostPage