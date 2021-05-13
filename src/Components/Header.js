import React from 'react';

const Header = () => (
    <header className="header__container">
        <div className="header__hamburger">
            <a href="" title="Menu" aria-label="Menu">
                <img className="header__icon" src="./assets/images/ico-menu.svg" alt="Menú"/>
            </a>
        </div>
        <div className="header__logo">
            <a href="" title="Logo" aria-label="Logo">
                <img className="header__icon" src="./assets/images/ico-menu.svg" alt="Logo"/>
            </a>
        </div>
        <div className="header__search">
            <a href="" title="Buscar" aria-label="Buscar">
                <img className="header__icon" src="./assets/images/ico-menu.svg" alt="Buscar"/>
            </a>
        </div>
    </header>
)
export default Header;