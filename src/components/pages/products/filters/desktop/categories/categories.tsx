import React, {useEffect, useState} from 'react';
import css from './categories.module.css'
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import food from '../../../../../../../public/images/icons/cooked-food.svg'
import veg from '../../../../../../../public/images/icons/fruits-and-veg.svg'
import milk from '../../../../../../../public/images/icons/milk.svg'
import meat from '../../../../../../../public/images/icons/meat.svg'
import {ICategoryFilter} from "@/components/pages/products/filters/desktop/data-types/category/category";
import Category from "@/components/pages/products/filters/desktop/categories/category/category";
import {useTranslations} from 'next-intl';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchCategory} from "@/slices/category/categorySlices";


interface props {

}


// const categoriesList: ICategoryFilter[] = [
//     {
//         id: 1,
//         img: food,
//         name: 'Готовая еда',
//         count: 80
//     },
//     {
//         id: 2,
//         img: veg,
//         name: 'Овощи и фрукты',
//         count: 50
//     },
//     {
//         id: 3,
//         img: milk,
//         name: 'Молочный прилавок',
//         count: 15
//     },
//     {
//         id: 4,
//         img: meat,
//         name: 'Мясо и птица',
//         count: 22
//     }
// ]


const Categories = (props: props) => {
    const [categoriesList,setCategoriesList] = useState<ICategoryFilter[]>(
        [
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
    )
    const t = useTranslations()
    const {category,loading,error} = useSelector((state:RootState) => state.category)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {

        dispatch(fetchCategory({q:'',size:'40'})).then((response)=>{
            const newCategories:ICategoryFilter[] = []
            if(response.payload.ok)
                response?.payload?.result?.map((categories:any) =>{
                    newCategories.push({
                        id: categories.id,
                        name: categories.name,
                        img: categories.icone && categories.icone,
                        // img:milk,
                        count : 10 * categories.id
                    })
                })
            setCategoriesList(newCategories)
        })
    }, []);
    return (
        <FilterCollapse title={t('categories.title')}>
            {categoriesList.map((category) => (
                <Category category={category} key={category.id}/>
            ))}

        </FilterCollapse>
    );
};

export default Categories;