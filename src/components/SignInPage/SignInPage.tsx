import React from "react";

import './SignInPage.scss'

const SignInPage = () => {
    return (
        <form action="#" className="singin-page">
            <div className="singin-page__title">
                <p>Вход</p>
            </div>
            <div className="singin-page__email">
                <p>Логин :</p>
                <input type="text" />
            </div>
            <div className="singin-page__password">
                <p>Пароль :</p>
                <input type="password" />
            </div>
            <div className="singin-page__button">
                <button type="submit">Отправить</button>
            </div>
        </form>
    )
}

export default SignInPage