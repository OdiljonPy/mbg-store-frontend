import React from 'react';
import css from './slider-item.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import partner from '@/../public/images/partners/mock.svg'
interface Props {

}

const SliderItem = (props: Props) => {
    return (
        <div className={`${css.img} keen-slider__slide`}>
            <ResponsiveImage src={partner} alt={''}/>
        </div>
    );
};

export default SliderItem;