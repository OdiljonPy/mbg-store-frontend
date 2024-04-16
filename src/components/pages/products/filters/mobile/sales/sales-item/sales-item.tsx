import React from 'react';
import {useFormContext} from "react-hook-form";
import {BoolFields, IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item.module.css";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";


interface props {
    item: ICustomCheckbox
    boolName?: BoolFields | undefined
}

const SalesItem = ({item,boolName}: props) => {
    const {
        watch,
        setValue
    } = useFormContext<IFilters>()

    const sales: string | undefined = watch('sales')


    const {
        title,
        id
    } = item


    const onSetRating = () => {
        setValue('sales', id.toString())
        if(boolName){
            setValue(boolName, false )
        }
        // setValue('withFeedback', true)
    }


    return (
        <label onClick={onSetRating} className={`${css.item} ${sales === id.toString() ? css.active : ''}`}>
            <input className={css.input} value={id} type={'radio'}/>
            <span className={css.title}>
                {title}
             </span>
        </label>
    );
};

export default SalesItem;