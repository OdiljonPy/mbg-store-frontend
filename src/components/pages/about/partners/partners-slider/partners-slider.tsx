import React from 'react';
import css from './partners-slider.module.css'
import "keen-slider/keen-slider.min.css"
import {usePartnersSlider} from "@/components/pages/about/partners/hooks/use-partners-slider/use-partners-slider";
import SliderItem from "@/components/pages/about/partners/partners-slider/slider-item/slider-item";
import {IPartner} from "@/data-types/base/partner";
import Skeleton from "react-loading-skeleton";

interface Props {
    partners:IPartner[],
}

const PartnersSlider = ({partners}: Props) => {

    const sliderRef = usePartnersSlider()

    return (
        <div ref={sliderRef} className={`${css.slider} keen-slider`}>
            {
               partners?.map((partner,idx)=><SliderItem partner={partner} key={idx}/>)
            }

        </div>
    );
};

export default PartnersSlider;