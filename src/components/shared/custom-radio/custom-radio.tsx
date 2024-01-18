import React, {ChangeEvent} from 'react';
import css from './custom-radio.module.css'
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";

interface props {
    radio: ICustomRadio
    isChecked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomRadio = ({radio, isChecked, onChange}: props) => {

    const {name, key, title} = radio


    return (
        <label className={css.checkbox}>
            <input className={css.input} type={'radio'} onChange={onChange} checked={isChecked} value={key} name={name}/>
            <span className={`${css.checkmark} ${isChecked ? css.checked : ''}`}/>
            <span className={css.text}>{title}</span>
        </label>
    );
};

export default CustomRadio;