import React, {ForwardedRef, forwardRef} from 'react';
import css from './thumbnail.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProductSingle} from "@/data-types/products/products";
import {IProductInner} from "@/data-types/products/product-inner/product-inner";

interface props {
    currentSlide: number
    gallery: IProductInner,
    loading:boolean
}

const Thumbnail = forwardRef(({currentSlide,loading,gallery}: props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <>
            { loading ? '' :  <div ref={ref} className={`keen-slider thumbnail ${css.thumbnail}`}>

                {
                    gallery?.images?.map((item,index) =>{
                        return (
                            <div key={item.id} className={`${css.item} ${currentSlide === index ? css.active : ''} keen-slider__slide`}>
                                <ResponsiveImage src={item.image} alt={'Кукуруза Bonduelle Classique сладкая'}/>
                            </div>
                        )
                    })
                }
            </div>}
        </>

    );
})

Thumbnail.displayName = 'Thumbnail'

export default Thumbnail;