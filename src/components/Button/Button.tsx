import React from "react";

import './Button.scss'

type Buttons = {
    text: string,
    className: string,
    onClick?: () => any
}

const Button = ({text, className, onClick}: Buttons) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button