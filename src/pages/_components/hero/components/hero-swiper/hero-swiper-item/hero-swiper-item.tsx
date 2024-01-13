import React from 'react';
import css from './hero-swiper-item.module.css'

interface props {

}

const HeroSwiperItem = (props: props) => {
    return (
        <div className={`keen-slider__slide ${css.swiperItem}`}>
            <div className={css.info}>
                <h2 className={css.title}>
                    Скачивайте приложение и получайте
                </h2>
            </div>
        </div>
    );
};

export default HeroSwiperItem;