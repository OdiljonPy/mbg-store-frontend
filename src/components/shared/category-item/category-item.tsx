import React from 'react';
import css from './category-item.module.css'
import Link from "next/link";
import {ICategory} from "@/data-types/categories/categories";

interface props {
    category: ICategory
    classNames?: string
}

const CategoryItem = ({category, classNames}: props) => {

    const {
        title,
        img,
        color
    } = category
    return (
        <Link
            style={{
                backgroundColor: color
            }}
            href={{
            pathname: '/products',
            query: {
                category: title
            }
        }} className={`${css.item} ${classNames ?? ''}`}>
            <span className={css.background} style={{
                backgroundImage: `url(${img.src})`
            }}/>
            <span className={css.title}>
                {title}
            </span>
        </Link>
    );
};

export default CategoryItem;