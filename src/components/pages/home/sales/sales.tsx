import React from 'react';
import css from './sales.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import {product, productSales, productWithoutDiscount} from "@/constants/product/product";
import {useSlider} from "@/hooks/use-slider";

interface props {

}

const Sales = (props: props) => {
    const {sliderRef, loaded} = useSlider()
    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'sales.title',
                    count: 1538
                }}/>
                <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                    {
                        productSales.map((product)=>{
                            return(
                                <div className={`keen-slider__slide`}>
                                    <Product product={product}/>
                                </div>
                            )
                        })
                    }
                    {/*<div className={`keen-slider__slide`}>*/}
                    {/*    <Product product={product}/>*/}
                    {/*</div>*/}
                    {/*<div className={`keen-slider__slide`}>*/}
                    {/*    <Product product={productWithoutDiscount}/>*/}
                    {/*</div>*/}
                    {/*<div className={`keen-slider__slide`}>*/}
                    {/*    <Product product={product}/>*/}
                    {/*</div>*/}
                    {/*<div className={`keen-slider__slide`}>*/}
                    {/*    <Product product={productWithoutDiscount}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default Sales;