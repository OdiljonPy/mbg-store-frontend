import React from 'react';
import css from "@/components/pages/home/sales/sales.module.css";
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";

import {useSlider} from "@/hooks/use-slider";
import {IProduct} from "@/data-types/products/common";
import Skeleton from "react-loading-skeleton";

interface props {
    similar:IProduct[]
    loading:boolean
}

const Similar = ({similar,loading}: props) => {
    const {loaded, sliderRef} = useSlider()
    return (
        <section className={css.sales}>
                <HeadingLine small heading={{
                    title: 'product.similar',
                    count: similar?.length
                }}/>
                <div ref={sliderRef} className={`keen-slider ${css.wrapper} ${loaded ? css.show : ''}`}>
                    {similar?.map((product)=>{
                        return <div className={`keen-slider__slide`} key={product.id}>
                            <Product product={product} />
                        </div>
                    })}
                    {
                        loading ? <div> <Skeleton containerClassName={css.container_skeleton} className={css.skeleton_position} count={4}  />
                        </div> :''
                    }
                </div>
        </section>
    );
};

export default Similar;