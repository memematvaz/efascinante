import React from 'react';

const Header = () => (
    <header className="header">
        <div className="header__top">
            <div className="header__menu" title="Menu" aria-label="Menu">
                <img className="icon" src="http://espanafascinante.com/test/icons/menu.png" alt="Menú"/>
            </div>
            <div className="logo" title="Logo" aria-label="Logo">
                <img className="icon" src="http://espanafascinante.com/test/logo/LOGO.png" alt="Logo"/>
            </div>
            <div className="header__search" title="Buscar" aria-label="Buscar">
                <img className="icon" src="http://espanafascinante.com/test/icons/search.png" alt="Buscar"/>
            </div>
        </div>
        <div className="header__bottom">
            <ul className="header__list">
                <li>
                    <a className="header__link" href="" title="Category" aria-label="Category">Category</a>
                </li>
                <li>
                    <a className="header__link" href="" title="Category" aria-label="Category">Category</a>
                </li>
                <li>
                    <a className="header__link" href="" title="Category" aria-label="Category">Category</a>
                </li>
            </ul>
        </div>
    </header>
)
export default Header;