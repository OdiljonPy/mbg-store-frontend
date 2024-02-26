import React, {useEffect, useRef, useState} from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import {product, productTop, productWithoutDiscount} from "@/constants/product/product";
import {useKeenSlider} from "keen-slider/react";
import {useSlider} from "@/hooks/use-slider";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import {ICommon, IProduct} from "@/data-types/products/products";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import Skeleton from "react-loading-skeleton";
import {fetchProductBestSeller} from "@/slices/product/productBestSellerSlices";

interface props {

}

const Top = (props: props) => {
    const isRef = useRef(false)
    const {sliderRef, loaded, onNext, onPrev, currentSlide} = useSlider()
    const {data,loading} = useSelector((state:RootState) => state.product_bestseller)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if(!isRef.current){
            dispatch(fetchProductBestSeller())
        }

        return () =>{
            isRef.current = true
        }
    }, []);

    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.top',
                    count: data[0]?.result?.totalElements
                }}/>
                {
                    !loading ? <Skeleton count={4} containerClassName={css.skeleton_cointainer}  className={css.skeleton} /> :
                <div className={css.wrapperOuter}>
                    <ProductSwiperArrow onClick={onPrev} isDisabled={currentSlide === 0}/>
                    <ProductSwiperArrow onClick={onNext} isNext/>
                    <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                        {
                            data.map((product:ICommon) =>{
                                return product?.result.content.map((item:IProduct) =>{
                                    return (
                                        <div className={`keen-slider__slide`} key={item.id}>
                                            <Product product={item} />
                                        </div>
                                    )
                                })
                            })
                            // productTop.map((product) =>{
                            //     return(
                            //         <div className={`keen-slider__slide`} key={product.id} >
                            //             <Product product={product}  />
                            //         </div>
                            //     )
                            // })
                        }

                    </div>
                </div>
                }
            </div>
        </section>
    );
};

export default Top;