import React, {useState} from 'react';
import css from './hero-swiper.module.css'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react"
import HeroSwiperDots from "@/components/pages/home/hero/components/hero-swiper/hero-swiper-dots/hero-swiper-dots";
import HeroSwiperItem from "@/components/pages/home/hero/components/hero-swiper/hero-swiper-item/hero-swiper-item";
import SwiperArrow from "@/components/shared/swiper-arrow/swiper-arrow";


interface props {

}

const HeroSwiper = (props: props) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        breakpoints: {
            "(min-width: 320px)": {
                slides: {
                    origin: "center",
                    perView: 1.2,
                    spacing: 15
                },
            },
            "(min-width: 575px)": {
                slides: {
                    origin: "auto",
                    perView: 1,
                    spacing: 15
                },
            }
        },

        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })


    const onChangeSlide = (index: number) => {
        instanceRef.current?.moveToIdx(index)
    }


    const onPrevSlide = () => {
        instanceRef.current?.prev()
    }
    const onNextSlide = () => {
        instanceRef.current?.next()
    }


    const slides: number[] = instanceRef.current?.track.details.slides.map(({abs}) => abs) ?? []
    return (
        <>
            <div className={css.wrapper}>
                <SwiperArrow onClick={onPrevSlide}/>
                <SwiperArrow onClick={onNextSlide} isNext={true}/>
                <div className={`${css.swiper} ${loaded ? css.show : ''} keen-slider`} ref={sliderRef}>
                    <HeroSwiperItem/>
                    <HeroSwiperItem/>
                    <HeroSwiperItem/>
                </div>
            </div>
            <HeroSwiperDots slides={slides} onChangeSlide={onChangeSlide} current={currentSlide}/>

        </>
    );
};

export default HeroSwiper;