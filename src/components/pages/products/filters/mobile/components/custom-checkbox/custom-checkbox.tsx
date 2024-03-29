import React, {ChangeEvent} from 'react';
import {useFormContext} from "react-hook-form";
import {
    BoolFields,
    CheckboxFields,
    IFilters
} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from './custom-checkbox.module.css'
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    name: CheckboxFields
    boolName?: BoolFields
    item: ICustomCheckbox
}

const CustomCheckbox = ({item, name, boolName}: props) => {
    const {watch, register, setValue} = useFormContext<IFilters>()
    const {id, title, count} = item
    const value: any= watch(name)

    const {ref, onBlur, onChange} = register(name)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (boolName) {
            setValue(boolName, true)
        }
        onChange(e)
    }

    return (
        <label
            className={`${css.item} ${value && value?.includes(id.toString()) ? css.active : ''}`}>
            <input className={css.input} value={id} name={name} onChange={onChangeHandler} onBlur={onBlur}
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

export default CustomCheckbox;