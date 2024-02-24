import React from 'react';
import css from './product-list.module.css'
import Product from "@/components/shared/product/product";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ICommon, IProducts} from "@/data-types/products/products";

interface props {
    products:any
}

const ProductList = ({products}: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()

    if (!isReady) return
    return (
        <>
            <div className={`${css.list} ${isOpened ? css.short: ''}`}>

                {
                    products.map((product:ICommon)=>{
                       return product.result.content.map((item:IProducts) =>{
                            return (
                                <Product product={item} isNotSwiper key={item.id}/>
                            )
                        })
                    })
                }
                {/*{*/}
                {/*    productSales.map((product)=>{*/}
                {/*        return(*/}
                {/*            <Product product={product} isNotSwiper key={product.id}/>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*{*/}
                {/*    productClose.map((product)=>{*/}
                {/*        return(*/}
                {/*            <Product product={product} isNotSwiper key={product.id} />*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*{*/}
                {/*    productTop.map((product) =>{*/}
                {/*        return(*/}
                {/*            <Product product={product} isNotSwiper key={product.id}/>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

            </div>
        </>
    );
};

export default ProductList;