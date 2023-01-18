import React from "react";

import './Button.scss'

type Buttons = {
    text: string,
    className: string
}

const Button = ({text, className}: Buttons) => {
    return (
        <button className={className}>
            {text}
        </button>
    )
}

export default Button