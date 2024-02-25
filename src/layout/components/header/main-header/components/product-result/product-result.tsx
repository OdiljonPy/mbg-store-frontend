import React from 'react';
import css from './product-result.module.css'
import Link from "next/link";
import {ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/category";
import {useSearchParams} from "next/navigation";
import {ParsedUrlQueryInput} from "querystring";
import Skeleton from "react-loading-skeleton";

interface props {
    // item: ICategoryItemGeneral
    item:string
    loading:boolean
}

const ProductResult = ({item,loading}: props) => {

    const searchParams = useSearchParams()
    const filters: string | null = searchParams.get('filters')

    console.log(item,"item chikd")
    const queries: ParsedUrlQueryInput = {
        search: item,
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
                { loading ?  item : <Skeleton count={1} height={'12px'} width={'150px'}/> }
            </span>
        </Link>
    );
};

export default ProductResult;