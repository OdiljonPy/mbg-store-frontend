import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item.module.css";
import storeCss from './store.module.css'
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    item: ICustomCheckbox
}

const Store = ({item}: props) => {
    const {watch, register, unregister} = useFormContext<IFilters>()
    const {id, title, count} = item
    const stores: string[] | undefined = watch('stores')

    const {ref, onBlur, onChange, name} = register('stores')

    return (
        <label
            className={`${css.item} ${storeCss.store}  ${stores && stores?.includes(id.toString()) ? css.active : ''}`}>
            <input className={css.input} value={id} name={name} onChange={onChange} onBlur={onBlur}
                   ref={ref} type={'checkbox'}/>
            <span className={css.title}>
                {title}
             </span>
            <span className={css.count}>
                {count}
             </span>
        </label>
    );
};

export default Store;