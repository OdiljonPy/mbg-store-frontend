import React from 'react';
import css from './hero-swiper-item.module.css'
import Info from "@/pages/_components/hero/components/hero-swiper/hero-swiper-item/info/info";

interface props {

}

const HeroSwiperItem = (props: props) => {
    return (
        <div className={`keen-slider__slide ${css.swiperItem}`}>
            <div className={css.info}>
                <Info/>

            </div>
        </div>
    );
};

export default HeroSwiperItem;