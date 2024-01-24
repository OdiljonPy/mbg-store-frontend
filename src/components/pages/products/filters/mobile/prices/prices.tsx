import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/categories.module.css";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import {useTranslation} from "next-i18next";
import Inputs from "@/components/pages/products/filters/desktop/prices/inputs/inputs";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import SliderPrices from "@/components/pages/products/filters/mobile/prices/slider/slider";

interface props {

}

const Prices = (props: props) => {
    const {watch, unregister} = useFormContext<IFilters>()
    const {t} = useTranslation()
    const prices = watch('prices')
    const parsedPrice = prices ? prices.split(',')?.map((item) => Number(item)) : [1000, 50000]
    const onReset = () => {
        unregister('prices')
    }
    return (
        <div className={css.btn}>
            <TopBar onReset={onReset} hideIcon title={t('price.title')}/>
            <Inputs priceRange={parsedPrice}/>
            <SliderPrices/>
        </div>
    );
};

export default Prices;