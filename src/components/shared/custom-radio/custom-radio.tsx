import React, {PropsWithChildren} from 'react';
import css from './custom-radio.module.css'
import {ICustomRadio, IOptions} from "@/components/shared/custom-radio/data-types/custom-radio";
import {raleway} from "@/constants/fonts/fonts";

interface props {
    radio: ICustomRadio
    options: IOptions
}

const CustomRadio = ({radio, options, children}: PropsWithChildren<props>) => {

    const {name, key, title} = radio
    const {checked, onChange, disabled} = options


    return (
        <label className={`${css.checkbox} ${raleway.className} ${disabled ? css.disabled : ''}`}>
            <input className={css.input} disabled={disabled} type={'radio'} onChange={onChange} checked={checked} value={key}
                   name={name}/>
            <span className={`${css.checkmark} ${checked ? css.checked : ''}`}/>
            {!children ? <span className={css.text}>{title}</span> : children}
        </label>
    );
};

export default CustomRadio;