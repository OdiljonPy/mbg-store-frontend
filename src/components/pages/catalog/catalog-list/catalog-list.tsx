import React from 'react';
import css from './catalog-list.module.css'
import {useTranslations} from 'next-intl';
import CategoryItem from "@/components/shared/category-item/category-item";
import {category} from "@/constants/categories/categories";
import {ICategory} from "@/data-types/categories/categories";

interface props {
    data?:ICategory[]
}

const CatalogList = ({data}: props) => {
    const t = useTranslations()
    return (

        <div className={css.list}>

            {
                data?.map((category) =>{
                    return <CategoryItem category={category}  key={category.id}/>
                })
            }
        </div>

    );
};

export default CatalogList;