import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import One from '../../images/burger2.jpg';
import Two from '../../images/biriyani.jpg';
import Three from '../../images/salad.jpg';
import Four from '../../images/sandwich1.jpg';
import Five from '../../images/mix.jpg';
import Six from '../../images/chicken.jpg';
import './Slider.css';

function Slider() {
    return (
        <div className="slider">
        <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        nav
        dots
        loop
        >
            <div className="item">
                <img src={One} alt="" />
            </div>
            <div className="item">
                <img src={Two} alt="" />
            </div>
            <div className="item">
                <img src={Three} alt="" />
            </div>
            <div className="item">
                <img src={Four} alt="" />
            </div>
            <div className="item">
                <img src={Five} alt="" />
            </div>
            <div className="item">
                <img src={Six} alt="" />
            </div>
        </OwlCarousel>
        </div>
    )
}

export default Slider
