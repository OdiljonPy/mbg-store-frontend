import React from 'react';
import css from './hero.module.css'
import HeroSwiper from "@/pages/_components/hero/components/hero-swiper/hero-swiper";

interface props {

}

const Hero = (props: props) => {
    return (
        <section className={css.hero}>
            <div className={'container'}>
                <HeroSwiper/>
            </div>
        </section>
    );
};

export default Hero;