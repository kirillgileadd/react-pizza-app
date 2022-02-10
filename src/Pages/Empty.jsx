import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../assets/img/empty-cart.png';

const Empty = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h2>
                Корзина пустая
            </h2>
            <p style={{marginBottom: '26px'}}>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={CartEmptyImg} alt="Empty cart" style={{width: '60%', marginBottom: '26px'}}/>
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};

export default Empty;