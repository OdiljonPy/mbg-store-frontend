import React from 'react';
import css from './product-result.module.css'
import Link from "next/link";
import {ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/category";
import {useSearchParams} from "next/navigation";
import {ParsedUrlQueryInput} from "querystring";
import Skeleton from "react-loading-skeleton";

interface props {
    item: ICategoryItemGeneral
    loading:boolean
}

const ProductResult = ({item,loading}: props) => {

    const searchParams = useSearchParams()
    const filters: string | null = searchParams.get('filters')

    const queries: ParsedUrlQueryInput = {
        search: item.title,
        sort: searchParams.get('sort') ?? 'popular',
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
                { loading ? <Skeleton count={1} height={'12px'} width={'190px'}/> :  item.title }
            </span>
        </Link>
    );
};

export default ProductResult;