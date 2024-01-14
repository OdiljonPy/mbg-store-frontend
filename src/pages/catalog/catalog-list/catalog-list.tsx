import React from 'react';
import css from './catalog-list.module.css'
import Breadcrumbs from "@/shared/breadcrumbs/breadcrumbs";
import {useTranslation} from "next-i18next";
import CategoryItem from "@/shared/category-item/category-item";
import {category} from "@/constants/categories/categories";

interface props {

}

const CatalogList = (props: props) => {
    const {t} = useTranslation()
    return (

        <div className={css.list}>
            <CategoryItem category={category}/>
            <CategoryItem category={category}/>
            <CategoryItem category={category}/>
            <CategoryItem category={category}/>
        </div>

    );
};

export default CatalogList;