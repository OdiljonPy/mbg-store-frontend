import React, {useState} from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/shared/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";
import {useKeenSlider} from "keen-slider/react";
import {useSlider} from "@/hooks/use-slider";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";

interface props {

}

const Top = (props: props) => {
    const {sliderRef, loaded, onNext, onPrev, currentSlide} = useSlider()

    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.top',
                    count: 978
                }}/>
                <div className={css.wrapperOuter}>
                    <ProductSwiperArrow onClick={onPrev} isDisabled={currentSlide === 0}/>
                    <ProductSwiperArrow onClick={onNext} isNext/>
                    <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                        <div className={`keen-slider__slide`}>
                            <Product product={product}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={productWithoutDiscount}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={product}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={productWithoutDiscount}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={product}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={productWithoutDiscount}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={product}/>
                        </div>
                        <div className={`keen-slider__slide`}>
                            <Product product={productWithoutDiscount}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Top;