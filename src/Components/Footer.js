import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="logo" title="Logo" aria-label="Logo">
            <img className="icon" src="http://espanafascinante.com/test/logo/LOGO_white.png" alt="Logo"/>
        </div>
    
        <div className="footer__text-container">
            <div className="info__text-container">
                <p className="info-text info-text--inverted">Category</p>
                <p className="info-text info-text--inverted info-text--light">Subcategory 1</p>
                <p className="info-text info-text--inverted info-text--light">Subcategory 2</p>
            </div>
            <div className="info__text-container">
                <p className="info-text info-text--inverted">Category</p>
                <p className="info-text info-text--inverted info-text--light">Subcategory 1</p>
                <p className="info-text info-text--inverted info-text--light">Subcategory 2</p>
            </div>
        </div>

    </footer>
)
export default Footer;