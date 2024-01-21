import React from 'react';
import css from './product-result.module.css'
import Link from "next/link";
import {ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/category";
import {useSearchParams} from "next/navigation";
import {ParsedUrlQueryInput} from "querystring";

interface props {
    item: ICategoryItemGeneral
}

const ProductResult = ({item}: props) => {
    const {
        title
    } = item
    const searchParams = useSearchParams()
    const filters: string | null = searchParams.get('filters')


    const queries: ParsedUrlQueryInput = {
        category: title,
        sort: 'popular',
        filters: filters
    }

    if (!filters) {
        delete queries.filters
    }
    return (
        <Link href={{
            pathname: '/products',
            query: queries
        }} shallow={true} className={css.item}>
            <span className={css.text}>
                {title}
            </span>
        </Link>
    );
};

export default ProductResult;