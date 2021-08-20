import React from "react";
import shoes from '../../images/shoes.png';
import './styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <span>Не забудьте взять с собой танцевальную обувь</span>
            <img  src={shoes} alt="rings" />
        </div>
    );
};

export default Footer;
