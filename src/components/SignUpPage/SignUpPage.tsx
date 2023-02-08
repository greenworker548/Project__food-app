import React from "react";

import './SignUpPage.scss'

const SignUpPage = () => {
    return (
        <form action="#" className="signup-page">
            <div className="signup-page__title">
                <p>Регистрация</p>
            </div>
            <div className="signup-page__email">
                <p>Логин :</p>
                <input type="text" />
            </div>
            <div className="signup-page__password">
                <p>Пароль :</p>
                <input type="password" />
            </div>
            <div className="signup-page__button">
                <button type="submit">Отправить</button>
            </div>
        </form>
    )
}

export default SignUpPage