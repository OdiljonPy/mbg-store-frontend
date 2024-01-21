import React from 'react';
import css from './filters.module.css'
import {useSearchParams} from "next/navigation";
import ResetFilters from "@/components/pages/products/filters/reset-filters/reset-filters";
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {useRouter} from "next/router";
import Categories from "@/components/pages/products/filters/categories/categories";
import Prices from "@/components/pages/products/filters/prices/prices";

interface props {

}

const Filters = (props: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()

    if (!isReady) return

    return (
        <div className={`${css.filters} ${isOpened ? css.show : ''}`}>
            <ResetFilters/>
            <Categories/>
            <Prices/>
        </div>
    );
};

export default Filters;