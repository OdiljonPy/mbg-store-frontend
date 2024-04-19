

import React, {useEffect} from 'react';
import css from './sales.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import {useSlider} from "@/hooks/use-slider";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProductDiscount} from "@/slices/product/productDiscountSlices";
import Skeleton from "react-loading-skeleton";

interface props {

}

const Sales = (props: props) => {

    const {data,loading} = useSelector((state:RootState) => state.product_discount)
    const dispatch = useDispatch<AppDispatch>()
    const {sliderRef, loaded} = useSlider()

    useEffect(() => {
        dispatch(fetchProductDiscount())
    }, [dispatch]);

    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'sales.title',
                    count: data?.totalElements,
                    link : "products?sort=popular&onSales=true"
                }}/>

                {
                    loading ? <Skeleton  containerClassName={css.skeleton_cointainer}  className={css.skeleton} count={4} /> :
                        <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                            {
                                data?.content?.map((product) =>{
                                    return (
                                        <div className={`keen-slider__slide`} key={product.id}>
                                            <Product product={product} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                }

            </div>
        </section>
    );
};

export default Sales;