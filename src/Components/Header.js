import React from 'react';
import data from '../data.json'


const Header = () => (
    <header className="header">
        <div className="header__top">
            <div className="header__menu" title="Menu" aria-label="Menu">
                <img className="header__icon" src="http://espanafascinante.com/test/icons/menu.png" alt="Menú"/>
            </div>
            <div className="header__logo" title="Logo" aria-label="Logo">
                <img className="header__icon" src="http://espanafascinante.com/test/logo/LOGO.png" alt="Logo"/>
            </div>
            <div className="header__search" title="Buscar" aria-label="Buscar">
                <img className="header__icon" src="http://espanafascinante.com/test/icons/search.png" alt="Buscar"/>
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