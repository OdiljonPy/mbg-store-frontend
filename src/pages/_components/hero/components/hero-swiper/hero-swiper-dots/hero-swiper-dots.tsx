import React from 'react';
import css from './hero-swiper-dots.module.css'

interface props {
    current: number
    onChangeSlide: (i: number) => void
}

const HeroSwiperDots = ({current, onChangeSlide}: props) => {
    return (
        <div className={css.dots}>

        </div>
    );
};

export default HeroSwiperDots;