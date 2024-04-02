import React from 'react';
import css from './body.module.css'
import CategoryItem from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item";
import {ICategory} from "@/data-types/categories/categories";

interface props{
    categories:ICategory[]
    loading:boolean
}
const Body = ({categories,loading}:props) => {

    return (
        <div className={css.wrapper}>
            {loading ? '' : categories.map((category) => (
                <CategoryItem item={category} key={category.id}/>
            ))}
        </div>
    );
};

export default Body;