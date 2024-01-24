import React, {useEffect, useState} from 'react';
import css from './prices.module.css'
import {ConfigProvider, Slider} from "antd";
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import {useRouter} from "next/router";
import {usePathname, useSearchParams} from "next/navigation";
import {IPriceRange} from "@/components/pages/products/filters/desktop/data-types/prices/prices";
import PriceSlider from "@/components/pages/products/filters/desktop/prices/slider/slider";
import Inputs from "@/components/pages/products/filters/desktop/prices/inputs/inputs";
import {useTranslation} from "next-i18next";

interface props {

}

const Prices = (props: props) => {
    const {t} = useTranslation()
    const pathname = usePathname()
    const {push, query, isReady} = useRouter()
    const searchParams = useSearchParams()
    const prices: string | null = searchParams.get('prices')
    const pricesRange = prices ? prices.split(',').map((item) => Number(item)) : [1000, 100000000]
    const [priceRange, setPriceRange] = useState<number[]>(pricesRange)

    const onChange = (value: number[]) => {
        const [start, end] = value
        setPriceRange([start, end])
    };

    const onChangeComplete = (value: number[]) => {
        const [start, end] = value
        push({
            pathname,
            query: {
                ...query,
                prices: `${start},${end}`
            }
        }, undefined, {
            scroll: false
        })
    };


    useEffect(() => {
        if (isReady) {
            setPriceRange(pricesRange)
        }
    }, [prices])

    return (
        <FilterCollapse title={t('price.title')}>
            <div className={css.price}>
                <Inputs priceRange={priceRange}/>
                <PriceSlider priceRange={priceRange} onChangeComplete={onChangeComplete} onChange={onChange}/>
            </div>
        </FilterCollapse>
    );
};

export default Prices;