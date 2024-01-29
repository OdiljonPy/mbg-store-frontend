import React from 'react';
import css from './description.module.css'
import {useTranslation} from "next-i18next";
import Badge from "@/components/shared/badge/badge";
import Title from "@/components/pages/product/wrapper/components/info/description/title/title";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import {Rate} from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import Price from "@/components/pages/product/wrapper/components/info/description/price/price";
import Deliveries from "@/components/pages/product/wrapper/components/info/description/deliveries/deliveries";
import Actions from "@/components/pages/product/wrapper/components/info/description/actions/actions";
import AboutProduct from "@/components/pages/product/wrapper/components/info/description/about-product/about-product";

interface props {

}

const Description = (props: props) => {
    const {t} = useTranslation()
    return (
        <div className={css.description}>
            <Title title={'Кукуруза Bonduelle Classique сладкая'}/>
            <div className={css.text}>
                <p className={css.weight}>
                    170г
                </p>
                <Badge text={t('product.has')} color={'#60C787'}/>
            </div>
            <Seller seller={'Зеленая лавка'}/>
            <Rate rate={4.9} count={150}/>
            <Price price={14000} discount_percentage={15} discount_price={12000}/>
            <Deliveries/>
            <Actions/>
            <AboutProduct/>
        </div>
    );
};

export default Description;