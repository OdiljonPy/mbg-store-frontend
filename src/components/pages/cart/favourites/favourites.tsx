import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import Product from "@/components/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";
import React from "react";
import {useSlider} from "@/hooks/use-slider";

interface props {

}

const Favourites = (props: props) => {
    const {onPrev, onNext, currentSlide, loaded, sliderRef} = useSlider()
    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine small heading={{
                    title: 'header.favourites'
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

export default Favourites;