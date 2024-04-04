import React, {useEffect} from 'react';
import css from './categories.module.css'
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import Category from "@/components/pages/products/filters/desktop/categories/category/category";
import {useTranslations} from 'next-intl';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchCategory} from "@/slices/category/categorySlices";
import {ICategory} from "@/data-types/categories/categories";


interface props {

}


const Categories = ({}: props) => {
    const {categories,loading,error} = useSelector((state:RootState) => state.category)
    const t = useTranslations()

    return (
        <FilterCollapse title={t('categories.title')}>
            {loading ? '...loading' :categories.map((category) => (
                <Category category={category} key={category.id}/>
            ))}
        </FilterCollapse>
    );
};

export default Categories;