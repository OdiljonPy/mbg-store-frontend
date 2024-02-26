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
        id,
        name,
        image,
        icone,
        color
    } = category

    return (
        // <Link
        //     style={{
        //         backgroundColor: color ? color : '#fff'
        //     }}
        //     href={{
        //     pathname: '/products',
        //     query: {
        //         category: name,
        //         sort: 'popular'
        //     }
        // }} className={`${css.item} ${classNames ?? ''}`}>
        //     <span className={css.background} style={{
        //         backgroundImage: `url(${image})`
        //     }}/>
        //     <span className={css.title}>
        //         {name}
        //     </span>
        // </Link>
        <Link
            style={{
                backgroundImage: `url(${icone})`,
                objectFit:'cover'
            }}
            href={{
                pathname: '/products',
                query: {
                    category: name,
                    category_id:id,
                    sort: 'popular'
                }
            }} className={`${css.item} ${classNames ?? ''}`}>
            <span className={css.title}>
                {name}
            </span>
        </Link>
    );
};

export default CategoryItem;