import React from 'react';
import css from './partners-slider.module.css'
import "keen-slider/keen-slider.min.css"
import {usePartnersSlider} from "@/components/pages/about/partners/hooks/use-partners-slider/use-partners-slider";
import SliderItem from "@/components/pages/about/partners/partners-slider/slider-item/slider-item";

interface props {

}

const PartnersSlider = (props: props) => {

    const sliderRef = usePartnersSlider()

    return (
        <div ref={sliderRef} className={`${css.slider} keen-slider`}>
            <SliderItem/>
            <SliderItem/>
            <SliderItem/>
            <SliderItem/>
            <SliderItem/>
        </div>
    );
};

export default PartnersSlider;