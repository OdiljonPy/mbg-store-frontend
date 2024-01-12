import React from 'react';
import css from './product-result.module.css'
import Link from "next/link";
import {ICategoryItem, ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/data-types";

interface props {
    item: ICategoryItemGeneral
}

const ProductResult = ({item}: props) => {
    const {
        title
    } = item
    return (
        <Link href={'/search'} className={css.item}>
            <span className={css.text}>
                {title}
            </span>
        </Link>
    );
};

export default ProductResult;