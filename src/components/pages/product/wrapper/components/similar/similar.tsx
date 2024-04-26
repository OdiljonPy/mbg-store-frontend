import React, {useEffect} from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";

import {useSlider} from "@/hooks/use-slider";
import {IProduct} from "@/data-types/products/common";
import Skeleton from "react-loading-skeleton";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import {useRouter} from "next/router";
import {useKeenSlider} from "keen-slider/react";

interface props {
    similar:IProduct[]
    loading:boolean
}

const Similar = ({similar,loading}: props) => {
    const {onPrev, onNext, currentSlide, loaded, sliderRef} = useSlider()

    const {query:{id}} = useRouter();


    const [ref, internalSlider] = useKeenSlider({
        slideChanged(){
            internalSlider?.current?.update();
        }
    })
    useEffect(() => {
        internalSlider?.current?.update();
        // onNext()
    }, [similar,loaded]);

    return (
        <section className={css.sales}>
                <HeadingLine small heading={{
                    title: 'product.similar',
                }}/>
            {
                loading ?  <Skeleton containerClassName={css.container_skeleton} className={css.skeleton_position} count={4}  /> :
                <div className={css.wrapperOuter}>
                    <ProductSwiperArrow onClick={onPrev} isDisabled={currentSlide === 0}/>
                    <ProductSwiperArrow onClick={onNext} isNext/>

                    <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                        {
                            similar?.map((product)=>{
                                return <div className={`keen-slider__slide`} key={product.id}>
                                    <Product product={product} />
                                </div>
                            })
                        }
                    </div>
                </div>
            }

        </section>
    );
};

export default Similar;