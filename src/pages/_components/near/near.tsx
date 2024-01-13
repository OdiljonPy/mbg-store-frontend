import React, {useState} from 'react';
import css from "@/pages/_components/sales/sales.module.css";
import HeadingLine from "@/shared/heading-line/heading-line";
import Product from "@/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product";
import {useKeenSlider} from "keen-slider/react";
import {useSlider} from "@/hooks/use-slider";
import SwiperArrow from "@/shared/swiper-arrow/swiper-arrow";
import ProductSwiperArrow from "@/shared/product-swiper-arrow/product-swiper-arrow";


interface props {

}

const Near = (props: props) => {
    const {sliderRef, loaded, onNext, onPrev, instanceRef} = useSlider()

    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.near',
                    count: 978
                }}/>
                <div className={css.wrapperOuter}>
                    <ProductSwiperArrow onClick={onPrev}/>
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

export default Near;