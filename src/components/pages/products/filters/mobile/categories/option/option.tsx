import React from 'react';
import css from './option.module.css'
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {ICategory} from "@/data-types/categories/categories";

interface props {
    item: ICategory
    onClose: () => void
}

const Option = ({item, onClose}: props) => {
    const {id, name, count_product, icone} = item
    const {
        watch,
        setValue
    } = useFormContext<IFilters>()

    const onSetValue = () => {
        setValue('category', id.toString())
        onClose()
    }

    const category = watch('category')

    return (
        <label onClick={onSetValue} className={css.item}>
            <input type={'radio'} className={css.input} value={id}/>
            <span className={css.info}>
               <span className={css.icon}>
                    <ResponsiveImage src={icone} alt={name}/>
               </span>
                <span className={`${css.label} text-mobile-size ${category === id.toString() ? css.active: ''}`}>
                 {name}
                </span>
            </span>
            <span className={`${css.count} text-mobile-size`}>
                {count_product}
            </span>
        </label>
    );
};

export default Option;