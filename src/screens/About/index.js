import React, {useState} from "react";
import f1  from '../../images/3.JPG';
import f2  from '../../images/3.JPG';
import buhoy  from '../../images/buhoy.JPG';
import buket  from '../../images/bukett.jpg';
import Animate from '@charlesvien/react-animatecss';
import './styles.css';

const About = () => {
    const [visible, setVisible]  = useState(false);
    const handleClick = () => setVisible(true);

    return (
        <>
            <div className="container" id="about" onClick={handleClick}>
                <h2>Мы</h2>
                <div className="photos">
                    <img src={f1} alt="Vlad" className="we"/>
                    <img src={f2} alt="Nastia" className="we"/>
                </div>
                <p className="aboutUs">
                    Добро пожаловать в наш мир!
                    На предстоящей вечеринке стоит забыть про свадьбу в
                    ее классическом понимании, ведь основная тематика- #ШРЕКСОсвадьба.
                    Нам не терпится отпраздновать ее в Киеве со всеми родными и друзьями.
                    А пока займитесь изучением нашего сайта.
                    И не забудьте заполнить форму с названиями песен,
                    которые бы вы обязательно хотели услышать на свадьбе.
                </p>
            </div>
            <div className="container grey" id="column">
                <h2>Челлендж принято</h2>
                <div className="container white">
                    <img src={buhoy} className="otherPhoto"/>
                    <p>
                        Первыми из наших друзей свадебный челлендж начали Дима и Маша,- летом состоялась их свадьба. По очень странным обстоятельствам, Настя поймала букет невесты. А обстоятельства странные потому, что поймала со второго раза и не совсем от невесты. Но это уже совсем другая история…
                        2 октября передадим этот челендж дальше. Посмотрим, кто следующий?

                    </p>
                </div>
                <div className="container white">
                    <p id="borderLeft">
                        Мы против пафоса на свадьбе. Против нафталиновых традиций типа каравая,
                        горько, 40 тостов и застолья длиною в жизнь. Мы хотим танцевать.
                        Мы хотим близости, теплоты друзей и родных. Мы выбираем быть настоящими на свадьбе.
                        <b
                            onClick={() => window.location.href='https://instagram.com/lutsakdanila?utm_medium=copy_link'}
                        >©️lutsakdanila
                        </b>
                    </p>
                    <img src={buket} className="otherPhoto buket"/>
                </div>
            </div>
        </>
    )
};

export default About;
