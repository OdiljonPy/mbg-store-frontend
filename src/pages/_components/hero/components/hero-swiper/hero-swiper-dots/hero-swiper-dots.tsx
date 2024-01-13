import React from 'react';
import css from './hero-swiper-dots.module.css'

interface props {
    current: number
    onChangeSlide: (i: number) => void
    slides: number[]
}

const HeroSwiperDots = ({current, onChangeSlide, slides}: props) => {
    return (
        <div className={css.dots}>
            {slides.map((slide) => (
                <button onClick={() => onChangeSlide(slide)} key={slide} className={`${css.dot} ${current === slide ? css.active : ''}`}/>
            ))}
        </div>
    );
};

export default HeroSwiperDots;