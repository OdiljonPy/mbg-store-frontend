import React from 'react';
import css from './body.module.css'
import {categoriesItems} from "@/components/pages/products/filters/mobile/categories/constants/mock";
import CategoryItem from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item";


const Body = () => {
    return (
        <div className={css.wrapper}>
            {categoriesItems.map((category) => (
                <CategoryItem item={category} key={category.id}/>
            ))}
        </div>
    );
};

export default Body;