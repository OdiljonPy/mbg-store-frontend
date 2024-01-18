import React from 'react';
import css from './filters.module.css'
import {useSearchParams} from "next/navigation";
import ResetFilters from "@/components/pages/products/filters/reset-filters/reset-filters";
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {useRouter} from "next/router";

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
            <FilterCollapse title={'Категории'}>
                test
            </FilterCollapse>
        </div>
    );
};

export default Filters;