import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import 'react-slideshow-image/dist/styles.css'
import photo1 from '../../images/1.jpg';
import photo2 from '../../images/3.JPG';
import photo3 from '../../images/2.GIF';
import './styles.css';

const Moments = () => {
    const images = [
        {url: photo1},
        {url: photo2},
        {url: photo3},
        ];
    const getSize = () => {
        const width = window.screen.width;
        if (width >= 1200) return {w: 940, h: 535};
        if (width >= 992 && width < 1200) return {w: 940, h: 555};
        if (width >= 768 && width < 992) return {w: 710, h: 480};
        if (width >= 600 && width < 768) return {w: 540, h: 480};
        if (width >400 && width < 600) return {w: 330, h: 280};
        if (width <= 400) return {w: 280, h: 280};
    };

    const sliderSize = getSize();
    return (
        <div className="container" id="moments">
            <h2>Моменты</h2>
            <SimpleImageSlider
                width={sliderSize.w}
                height={sliderSize.h}
                images={images}
                showNavs
            />
        </div>
    );
}

export default Moments;
