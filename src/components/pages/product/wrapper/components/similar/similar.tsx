import React from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";
import {useSlider} from "@/hooks/use-slider";

interface props {

}

const Similar = (props: props) => {
    const {loaded, sliderRef} = useSlider()
    return (
        <section className={css.sales}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'product.similar',
                    count: 15
                }}/>
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
                </div>
            </div>
        </section>
    );
};

export default Similar;