import React from "react";

import './AboutUsPage.scss'

import about_author from '../../assets/img/about_author.png'
import about_package from '../../assets/img/about_package.png'
import about_team from '../../assets/img/about_team.png'
import about_final from '../../assets/img/about_final.png'
import foto1 from '../../assets/img/foto1.png'
import foto2 from '../../assets/img/foto2.png'
import foto3 from '../../assets/img/foto3.png'
import foto4 from '../../assets/img/foto4.png'

const AboutUsPage = () => {
    return (
        <div className="about-page">
            <div className="about-page__title-box">
                <div className="title-box__content">
                    <p className="content__title">Здравствуйте! Меня зовут <span>Кобылинский Кирилл</span>, и я являюсь основателем GastroChef.</p>
                    <p className="content__description">Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе сборной Украины.</p>
                    <p className="content__description">У меня высшее образование национального университета физического воспитания и спорта Украины (НФВСУ), а так же в прошлом я профессиональный фитнес тренер!</p>
                    <p className="content__description bold">И я хочу Вам рассказать побольше о GastroChef.</p>
                </div>
                <div className="title-box__illustration">
                    <img src={about_author} alt="about_author" />
                </div>
            </div>
            <div className="about-page__history-box">
                <div className="history-box__illustration">
                    <img src={about_package} alt="#about_package" />
                </div>
                <div className="history-box__content">
                    <p className="content__title">История GastroChef началась более 6-ти лет назад...</p>
                    <p className="content__description">Долгое время я наблюдал как людям не хватает времени для правильного и здорового питания, какое правильного, просто питания регулярного.</p>
                    <p className="content__description">Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье. </p>
                    <p className="content__description">Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку еды правильного питания. </p>
                    <p className="content__description">Я со своим 17-и летним опытом в спорте и проф. образованием, вместе с диетологом разработали рационы правильного питания с подсчетом калорий (КБЖУ).</p>
                    <p className="content__description bold">Знакомтесь! Команда GastroChef!</p>
                </div>
            </div>
            <div className="about-page__team-box">
                <img src={about_team} alt="#about_team" />
            </div>
            <div className="about-page__final-box">
                <div className="final-box__content">
                    <p className="content__title">«GastroChef - легко для занятых»</p>
                    <p className="content__description">GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.</p>
                    <p className="content__description">Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!</p>
                    <p className="content__description">Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.</p>
                    <p className="content__description bold">С уважением, Кобылинский Кирилл.</p>
                </div>
                <div className="final-box__illustration">
                    <img src={about_final} alt="#about_final" />
                </div>
            </div>
            <div className="about-page__foto">
                <p>Фото наших блюд</p>
                <div className="foto-box">
                    <div className="foto">
                        <img src={foto1} alt="#foto1" />
                    </div>
                    <div className="foto">
                        <img src={foto2} alt="#foto2" />
                    </div>
                    <div className="foto">
                        <img src={foto3} alt="#foto3" />
                    </div>
                    <div className="foto">
                        <img src={foto4} alt="#foto4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage