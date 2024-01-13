import React from 'react';
import css from './hero-swiper-item.module.css'
import Info from "@/pages/_components/hero/components/hero-swiper/hero-swiper-item/info/info";
import MobileAppLink from "@/shared/mobile-app-link/mobile-app-link";
import MobileApp from "@/pages/_components/hero/components/hero-swiper/hero-swiper-item/info/mobile-app/mobile-app";

interface props {

}

const HeroSwiperItem = (props: props) => {
    return (
        <div className={`keen-slider__slide ${css.swiperItem}`}>
            <div className={css.info}>
                <Info/>
                <MobileApp/>
            </div>
        </div>
    );
};

export default HeroSwiperItem;