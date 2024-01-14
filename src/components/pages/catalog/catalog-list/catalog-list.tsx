import React from 'react';
import css from './catalog-list.module.css'
import {useTranslation} from "next-i18next";
import CategoryItem from "@/components/shared/category-item/category-item";
import {category} from "@/constants/categories/categories";

interface props {

}

const CatalogList = (props: props) => {
    const {t} = useTranslation()
    return (

        <div className={css.list}>
            {category.map((category) => (
                <CategoryItem category={category}  key={category.id}/>
            ))}
        </div>

    );
};

export default CatalogList;