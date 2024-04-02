import React from 'react';
import css from './category-item.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import {ICategory} from "@/data-types/categories/categories";

interface props {
    item: ICategory
}

const CategoryItem = ({item}: props) => {
    const {
        watch,
        setValue
    } = useFormContext<IFilters>()

    const category: string | undefined = watch('category')

    const {
        icone,
        name,
        count_product,
        id
    } = item


    const onSetCategory = () => setValue('category', id.toString())



    return (
        <label onClick={onSetCategory} className={`${css.item} ${category === id.toString() ? css.active : ''}`}>
            <input className={css.input} value={id}  type={'radio'}/>
            <span className={css.icon}>
                <ResponsiveImage src={icone} alt={name}/>
             </span>
            <span className={css.title}>
                {name}
             </span>
            <span className={css.count}>
                {count_product}
             </span>
        </label>
    );
};

export default CategoryItem;