import React, {useEffect} from 'react';
import css from './categories.module.css'
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import Category from "@/components/pages/products/filters/desktop/categories/category/category";
import {useTranslations} from 'next-intl';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchCategory} from "@/slices/category/categorySlices";


interface props {

}


const Categories = (props: props) => {

    const t = useTranslations()
    const {categories,loading,error} = useSelector((state:RootState) => state.category)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchCategory({q:'',size:'40'}))
    }, []);
    return (
        <FilterCollapse title={t('categories.title')}>
            {loading ? '...loading' :categories.map((category) => (
                <Category category={category} key={category.id}/>
            ))}
        </FilterCollapse>
    );
};

export default Categories;