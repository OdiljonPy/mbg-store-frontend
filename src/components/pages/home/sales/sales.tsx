

import React, {useEffect} from 'react';
import css from './sales.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import { productSales} from "@/constants/product/product";
import {useSlider} from "@/hooks/use-slider";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProductDiscount} from "@/slices/product/productDiscountSlices";
import {ICommon, IProduct} from "@/data-types/products/products";
import Skeleton from "react-loading-skeleton";

interface props {

}

const Sales = (props: props) => {

    const {data,loading} = useSelector((state:RootState) => state.product_discount)
    const dispatch = useDispatch<AppDispatch>()
    const {sliderRef, loaded} = useSlider()

    useEffect(() => {
        dispatch(fetchProductDiscount())
    }, []);
    console.log(data,"data")
    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'sales.title',
                    count: data[0]?.result?.totalElements
                }}/>

                {
                    !loading ? <Skeleton  containerClassName={css.skeleton_cointainer}  className={css.skeleton} count={4} /> :
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
                            }
                        </div>
                }

            </div>
        </section>
    );
};

export default Sales;