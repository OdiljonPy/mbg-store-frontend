import React from 'react';
import css from './body.module.css'
import {ICategory} from "@/components/pages/products/filters/mobile/categories/data-types/categories";
import {categoriesItems} from "@/components/pages/products/filters/mobile/categories/constants/mock";
import CategoryItem from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item";

interface props {

}


const Body = (props: props) => {
    return (
        <div className={css.wrapper}>
            {categoriesItems.map((category) => (
                <CategoryItem item={category} key={category.id}/>
            ))}
        </div>
    );
};

export default Body;