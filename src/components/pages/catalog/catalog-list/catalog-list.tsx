import React from 'react';
import css from './catalog-list.module.css'
import {useTranslations} from 'next-intl';
import CategoryItem from "@/components/shared/category-item/category-item";
import {category} from "@/constants/categories/categories";

interface props {

}

const CatalogList = (props: props) => {
    const t = useTranslations()
    return (

        <div className={css.list}>
            {category.map((category) => (
                <CategoryItem category={category}  key={category.id}/>
            ))}
        </div>

    );
};

export default CatalogList;