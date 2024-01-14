import React from 'react';
import {ICategory} from "@/pages/_components/popular/categories/data-types/category";
import css from './category-item.module.css'
import Link from "next/link";

interface props {
    category: ICategory
}

const CategoryItem = ({category}: props) => {

    const {
        id,
        img,
        title
    } = category
    return (
        <Link href={{
            pathname: '/products',
            query: {
                category: title
            }
        }} className={css.item}>
            <span className={css.background}/>
            <span className={css.title}>
                {title}
            </span>
        </Link>
    );
};

export default CategoryItem;