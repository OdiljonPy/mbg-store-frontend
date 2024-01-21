import React from 'react';
import css from './categories.module.css'
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import food from '@/../public/images/icons/cooked-food.svg'
import veg from '@/../public/images/icons/fruits-and-veg.svg'
import milk from '@/../public/images/icons/milk.svg'
import meat from '@/../public/images/icons/meat.svg'
import {ICategoryFilter} from "@/components/pages/products/filters/data-types/category/category";
import Category from "@/components/pages/products/filters/categories/category/category";

interface props {

}


const categoriesList: ICategoryFilter[] = [
    {
        id: 1,
        img: food,
        name: 'Готовая еда',
        count: 80
    },
    {
        id: 2,
        img: veg,
        name: 'Овощи и фрукты',
        count: 50
    },
    {
        id: 3,
        img: milk,
        name: 'Молочный прилавок',
        count: 15
    },
    {
        id: 4,
        img: meat,
        name: 'Мясо и птица',
        count: 22
    }
]

const Categories = (props: props) => {
    return (
        <FilterCollapse title={'Категории'}>
            {categoriesList.map((category) => (
                <Category category={category} key={category.id}/>
            ))}
        </FilterCollapse>
    );
};

export default Categories;