import React, {ChangeEvent, PropsWithChildren} from 'react';
import css from './custom-radio.module.css'
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";

interface props {
    radio: ICustomRadio
    isChecked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomRadio = ({radio, isChecked, onChange, children}: PropsWithChildren<props>) => {

    const {name, key, title} = radio


    return (
        <label className={css.checkbox}>
            <input className={css.input} type={'radio'} onChange={onChange} checked={isChecked} value={key}
                   name={name}/>
            <span className={`${css.checkmark} ${isChecked ? css.checked : ''}`}/>
            {typeof title === 'string' ? <span className={css.text}>{title}</span> : children}
        </label>
    );
};

export default CustomRadio;