import React from 'react';
import css from './filters.module.css'
import {useSearchParams} from "next/navigation";
import ResetFilters from "@/components/pages/products/filters/desktop/reset-filters/reset-filters";
import {useRouter} from "next/router";
import Categories from "@/components/pages/products/filters/desktop/categories/categories";
import Prices from "@/components/pages/products/filters/desktop/prices/prices";
import Stores from "@/components/pages/products/filters/desktop/stores/stores";
import Sales from "@/components/pages/products/filters/desktop/sales/sales";
import Rating from "@/components/pages/products/filters/desktop/rating/rating";
import Delivery from "@/components/pages/products/filters/desktop/delivery/delivery";
import Accessibility from "@/components/pages/products/filters/desktop/accessibility/accessibility";

interface props {

}

const Filters = (props: props) => {
    const searchParams = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    const {isReady} = useRouter()


    return (
        <div className={`${css.filters} ${!isReady ? css.hide : ''} ${isOpened ? css.show : ''}`}>
            <ResetFilters/>
            <Categories/>
            <Prices/>
            <Stores/>
            <Sales/>
            <Rating/>
            <Delivery/>
            <Accessibility/>
        </div>
    );
};

export default Filters;