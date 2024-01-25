import React from 'react';
import css from './switch.module.css'
import CustomSwitch from "@/components/shared/custom-switch/custom-switch";

interface props {
    checked: boolean
    onChange: (checked: boolean) => void
    title: string
}

const Switch = ({checked, onChange, title}: props) => {
    return (
        <div className={css.wrapper}>
            <p className={css.text}>
                {title}
            </p>
            <CustomSwitch checked={checked} onChange={onChange}/>
        </div>
    );
};

export default Switch;