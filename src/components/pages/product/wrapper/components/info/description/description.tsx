import React from 'react';
import css from './description.module.css'
import {useTranslations} from 'next-intl';
import Badge from "@/components/shared/badge/badge";
import Title from "@/components/pages/product/wrapper/components/info/description/title/title";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import {Rate} from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import Price from "@/components/pages/product/wrapper/components/info/description/price/price";
import Deliveries from "@/components/pages/product/wrapper/components/info/description/deliveries/deliveries";
import Actions from "@/components/pages/product/wrapper/components/info/description/actions/actions";
import AboutProduct from "@/components/pages/product/wrapper/components/info/description/about-product/about-product";
import { IProductSingle} from "@/data-types/products/products";
import Skeleton from "react-loading-skeleton";

interface props {
    info: IProductSingle,
    loading:boolean
}

const Description = ({info,loading}: props) => {
    // const { available, rating,rating_count, price,discount_price,discount } = info
    const t = useTranslations()
    return (
        <div className={css.description}>
            <Title title={info?.result?.name} loading={loading}/>
            {
                !loading ? <Skeleton className={css.skeleton_position} count={1} height={'30px'} width={'160px'}  /> : <div className={css.text}>
                    <p className={css.weight}>
                        {
                            `${info?.result?.available}г`
                        }
                    </p>
                    <Badge text={t('product.has')} color={'#60C787'}/>
                </div>
            }

            <Seller seller={'Зеленая лавка'}/>
            <Rate rate={info?.result?.rating} count={info?.result?.rating_count} loading={loading}/>
            <Price price={info?.result?.price} discount_percentage={info?.result?.discount} discount_price={info?.result?.discount_price} loading={loading}/>
            <Deliveries/>
            <Actions/>
            <AboutProduct/>
        </div>
    );
};

export default Description;