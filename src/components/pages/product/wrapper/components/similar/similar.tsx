import React, {useEffect} from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";

import {useSlider} from "@/hooks/use-slider";
import {IProduct} from "@/data-types/products/common";
import Skeleton from "react-loading-skeleton";
import {product} from "@/constants/product/product";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";

interface props {
    similar:IProduct[]
    loading:boolean
}

const Similar = ({similar,loading}: props) => {
    const {onPrev, onNext, currentSlide, loaded, sliderRef,instanceRef} = useSlider()

    useEffect(() => {
        const slider = instanceRef.current
        setTimeout(()=>{
            return ()=>{
                slider?.update()
            }
        },1500)
        return ()=>{
            slider?.update()
        }

    }, [instanceRef,similar]);
    return (
        <section className={css.sales}>
                <HeadingLine small heading={{
                    title: 'product.similar',
                }}/>
            <div className={css.wrapperOuter}>
                <ProductSwiperArrow onClick={onPrev} isDisabled={currentSlide === 0}/>
                <ProductSwiperArrow onClick={onNext} isNext/>
                <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                    {
                        loading ? <div> <Skeleton containerClassName={css.container_skeleton} className={css.skeleton_position} count={4}  />
                        </div> :similar?.map((product)=>{
                            return <div className={`keen-slider__slide`} key={product.id}>
                                <Product product={product} />
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Similar;