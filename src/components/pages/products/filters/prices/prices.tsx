import React, {useState} from 'react';
import css from './prices.module.css'
import {ConfigProvider, Slider} from "antd";
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {useRouter} from "next/router";
import {usePathname, useSearchParams} from "next/navigation";
import {IPriceRange} from "@/components/pages/products/filters/data-types/prices/prices";
import PriceSlider from "@/components/pages/products/filters/prices/slider/slider";
import Inputs from "@/components/pages/products/filters/prices/inputs/inputs";

interface props {

}

const Prices = (props: props) => {
    const pathname = usePathname()
    const {push, query} = useRouter()
    const searchParams = useSearchParams()
    const prices: string | null = searchParams.get('prices')
    const pricesRange = prices ? prices.split(',').map((item) => Number(item)) : []
    const [priceRange, setPriceRange] = useState<number[]>(prices ? pricesRange : [1000, 5000])

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

    return (
        <FilterCollapse title={'Цена, UZS'}>
            <div className={css.price}>
                <Inputs priceRange={priceRange}/>
                <PriceSlider priceRange={priceRange} onChangeComplete={onChangeComplete} onChange={onChange}/>
            </div>
        </FilterCollapse>
    );
};

export default Prices;