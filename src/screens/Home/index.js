import React from "react";
import video from '../../images/video.mov';
import About from '../About';
import Moments from "../Moments";
import When from '../When';
import Wishes from "../Wishes";
import Footer from '../../component/Footer';
import './styles.css';
import './media.css';

const Home = ()  => {
    return (
        <div className="main" id="main">
            <video className='video' autoPlay loop  muted>
                <source src={video} type='video/mp4'/>
            </video>
            <div className="content">
                <span>Приглашаем тебя на нашу<br/>свадебную вечеринку</span>
            </div>
            <About/>
            <Moments />
            <When/>
            <Wishes />
            <Footer />
        </div>
    );
};

export default Home;
