import React from "react";

import './FullPost.scss'

interface FullPosts {
    linkImage: string,
    title: string,
    date: string,
    description?: string
}

const FullPost = ({linkImage, title, date, description}: FullPosts) => {
    return (
        <div className="full-post">
            <div className="full-post__img">
                <img src={linkImage} alt="image-food" />
            </div>
            <h3 className="full-post__title">
                {title}
            </h3>
            <p className="full-post__date">
                {date}
            </p>
            <p className="full-post__text">
                {description}
            </p>
        </div>
    )
}

export default FullPost