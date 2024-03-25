import React from 'react';
import css from './comparison.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Labels from "@/components/pages/product/wrapper/components/info/comparison/labels/labels";
import Product from "@/components/pages/product/wrapper/components/info/comparison/product/product";
import {IProduct} from "@/data-types/products/common";
import Skeleton from "react-loading-skeleton";

interface props {
    comparison:IProduct[],
    loading:boolean
}

const Comparison = ({comparison,loading}: props) => {

    return (
        <section className={css.comparison}>
                <HeadingLine small heading={{
                    title: 'product.comparison'
                }}/>
                <div className={css.wrapper}>
                    <Labels/>

                    { comparison?.map((product:IProduct)=>{
                        return <Product product={product}  key={product.id}/>
                    }) }
                    {
                        loading ? <div> <Skeleton containerClassName={css.container_skeleton} className={css.skeleton_position} count={4}  />
                           </div> :''
                    }
                    {/*<Product product={product}/>*/}
                    {/*<Product product={productWithoutDiscount}/>*/}
                    {/*<Product product={product}/>*/}
                    {/*<Product product={productWithoutDiscount}/>*/}
                    {/*<Product product={product}/>*/}
                    {/*<Product product={productWithoutDiscount}/>*/}
                </div>
        </section>
    );
};

export default Comparison;