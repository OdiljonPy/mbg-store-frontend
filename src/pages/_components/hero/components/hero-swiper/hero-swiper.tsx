import React, {useState} from 'react';
import css from './hero-swiper.module.css'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react"
import Loader from "@/shared/loader/loader";
import HeroSwiperDots from "@/pages/_components/hero/components/hero-swiper/hero-swiper-dots/hero-swiper-dots";
import HeroSwiperItem from "@/pages/_components/hero/components/hero-swiper/hero-swiper-item/hero-swiper-item";


interface props {

}

const HeroSwiper = (props: props) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
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


    return (
        <div className={css.wrapper}>
            {!loaded && <Loader/>}
            <div className={`${css.swiper} keen-slider`} ref={sliderRef}>
                <HeroSwiperItem/>
            </div>
            <HeroSwiperDots onChangeSlide={onChangeSlide} current={currentSlide}/>
        </div>
    );
};

export default HeroSwiper;