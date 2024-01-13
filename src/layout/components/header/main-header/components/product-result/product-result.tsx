import React from 'react';
import css from './product-result.module.css'
import Link from "next/link";
import {ICategoryItem, ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/category";
import {useRouter} from "next/router";

interface props {
    item: ICategoryItemGeneral
}

const ProductResult = ({item}: props) => {
    const {push} = useRouter()
    const {
        title
    } = item

    const redirect = () => {
        push({
            pathname: '/products',
            query: {
                search: title
            }
        })
    }
    return (
        <Link onClick={redirect} href={{
            pathname: '/products',
            query: {
                search: title
            }
        }} shallow={true} className={css.item}>
            <span className={css.text}>
                {title}
            </span>
        </Link>
    );
};

export default ProductResult;