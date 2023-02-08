import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFullPost } from "../../redux/actionCreators/postActionCreators";
import Button from "../Button/Button";

import './Post.scss'

type PostType = {
    linkImage?: string,
    title: string,
    date: string,
    description?: string,
    id: any
}

const Post = ({linkImage, title, date, id, description}: PostType) => {
    const dispatch = useDispatch()

    return (
        <div className="post" id={id}>
            <div className="post__image">
                <img src={linkImage} alt="#post-image" />
            </div>
            <p className="post__title">
                {title}
            </p>
            <div className="post__nav">
                <p className="nav__date">
                    {date}
                </p>
                <NavLink to="/blog/post">
                    <Button text="Подробнее" className="button-blog-page" onClick={() => dispatch(getFullPost([{linkImage, title, date, id, description}]))} />
                </NavLink>
            </div>
        </div>
    )
}

export { Post }