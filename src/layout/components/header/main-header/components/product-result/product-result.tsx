import React from 'react';
import css from './product-result.module.css'
import Link from "next/link";
import {ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/category";

interface props {
    item: ICategoryItemGeneral
}

const ProductResult = ({item}: props) => {
    const {
        title
    } = item


    return (
        <Link  href={{
            pathname: '/products',
            query: {
                search: title,
                sort: 'popular'
            }
        }} shallow={true} className={css.item}>
            <span className={css.text}>
                {title}
            </span>
        </Link>
    );
};

export default ProductResult;