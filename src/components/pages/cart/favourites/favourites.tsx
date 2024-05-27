import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import Product from "@/components/shared/product/product";
import React, {useEffect} from "react";
import {useSlider} from "@/hooks/use-slider";
import {IProduct} from "@/data-types/products/common";
import {useKeenSlider} from "keen-slider/react";

interface props {
    favourites:IProduct[]
}

const Favourites = ({favourites}: props) => {
    const {onPrev, onNext, currentSlide, loaded, sliderRef,instanceRef} = useSlider()

    useEffect(() => {
        const slider = instanceRef.current
        return ()=>{
            slider?.update()
        }
    }, [instanceRef,favourites]);

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
                        {favourites.map((product)=> <div className={`keen-slider__slide`} key={product.id}>
                            <Product product={product} />
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favourites;