import React, {ForwardedRef, forwardRef} from 'react';
import css from './thumbnail.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import img from '../../../../../../../../../public/images/products/mikado.png'

interface props {
    currentSlide: number
}

const Thumbnail = forwardRef(({currentSlide}: props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={`keen-slider thumbnail ${css.thumbnail}`}>
            {Array.from(Array(5), (_, i) => i+1).map((item, index) => (
                <div key={item} className={`${css.item} ${currentSlide === index ? css.active : ''} keen-slider__slide`}>
                    <ResponsiveImage src={img} alt={'Кукуруза Bonduelle Classique сладкая'}/>
                </div>
            ))}
        </div>
    );
})

Thumbnail.displayName = 'Thumbnail'

export default Thumbnail;