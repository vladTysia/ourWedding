import React, {useState, useEffect} from "react";
import moment from "moment";
import mapImg from '../../images/map.jpg';
import castle from '../../images/castle.png';
import champane from '../../images/champane.png';
import food from '../../images/food.png';
import './styles.css';


const When = () => {
    const [finalDate, setFinalDate] = useState('');
    const mapLink = 'https://www.google.com/maps/place/HayLoft+Ukrainian+BBQ/@50.3795108,30.47715,15z/data=!4m5!3m4!1s0x0:0x8f584a62b87e11ee!8m2!3d50.3795189!4d30.4771466';

    const countTime = () => (
        moment(moment('20211002', 'YYYYMMDD')  - moment()).format('MM/DD/HH/mm/ss')
    );

    const mapClick = () => {
        window.location.href = mapLink;
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setFinalDate(countTime);
        }, 100);

        return() => {
            clearInterval(interval);
        }
    }, []);

    const timeArr = finalDate.split('/');
    const month = timeArr[0];
    const day = timeArr[1];
    const hours = timeArr[2];
    const mins = timeArr[3];
    const sec = timeArr[4];

    const isEndDate = () => month === '0' && day === '0' && hours === '0' && mins === '0' && sec === '0';

    return (
        <div id="when">
            <div className="container grey">
                <h2>Октябрь 02, 2021</h2>
                <h2>Церемония начинается через</h2>
                {
                   isEndDate() ?
                       (
                           <div className="counterContainer">
                               О нет! Церемония окончена. И живут они долго и счастливо...
                           </div>
                       )
                       :
                       (
                           <div className="counterContainer">
                               <div className="time">
                                   {month}
                                   <br/>
                                   <span>months</span>
                               </div>
                               <div className="time">
                                   {day}
                                   <br/>
                                   <span>days</span>
                               </div>
                               <div className="time">
                                   {hours}
                                   <br/>
                                   <span>hours</span>
                               </div>
                               <div className="time">
                                   {mins}
                                   <br/>
                                   <span>minutes</span>
                               </div>
                               <div className="time">
                                   {sec}
                                   <br/>
                                   <span>seconds</span>
                               </div>
                           </div>
                       )
                }
            </div>
            <div className="container white">
                <div className="location">
                    <img src={castle} alt="castle" className="castleIcon" />
                    <p>
                        Наш праздник любви будет проходить в Киеве,
                        на очень близкой к природе локации в самом сердце ВДНХ.
                        Ждём вас в ресторане HayLoft по адресу: <b>проспект Академика Глушкова 1</b>.
                    </p>

                    <img src={champane} alt="castle" className="castleIcon" />
                    <p>
                        Церемония, с которой начнётся наше приключение длиною в жизнь,
                        пройдет в яблоневом саду вблизи ресторана.
                        Там же вас будет ожидать и велкам зона,
                        на которой вы сможете насладиться напитками и закусками,
                        познакомиться с нашими семьями и друзьями, погрузиться в атмосферу свадьбы.
                    </p>

                    <img src={food} alt="castle" className="castleIcon" />
                    <p>
                        Ресторан расположен недалеко от центрального входа в ВДНХ, <b>по правую сторону от центрального входа</b>.
                        Мы уверены, вам будет комфортно, даже если не возьмёте с собой верхнюю одежду,
                        так как в любой момент сможете согреться пледом.
                    </p>
                </div>
                <img id="map" src={mapImg} alt="map" onClick={mapClick} />
            </div>
        </div>
    )
};

export default When;
