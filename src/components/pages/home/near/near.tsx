import React from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import {product, productClose, productWithoutDiscount} from "@/constants/product/product";
import {useSlider} from "@/hooks/use-slider";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";


interface props {

}

const Near = (props: props) => {
    const {sliderRef, loaded, onNext, onPrev, currentSlide} = useSlider()

    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.near',
                    count: 978
                }}/>
                <div className={css.wrapperOuter}>
                    <ProductSwiperArrow onClick={onPrev} isDisabled={currentSlide === 0}/>
                    <ProductSwiperArrow onClick={onNext} isNext/>
                    <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                        {
                            productClose.map((product) => {
                                return(
                                    <div className={`keen-slider__slide`} key={product.id}>
                                        <Product product={product} />
                                    </div>
                                )
                            })
                        }
                        <div className={`keen-slider__slide`}>
                            <Product product={product}/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Near;