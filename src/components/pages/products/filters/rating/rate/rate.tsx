import React from 'react';
import css from './rate.module.css'
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import CustomRadio from "@/components/shared/custom-radio/custom-radio";

interface props {
    rate: ICustomCheckbox
}

const Rate = ({rate}: props) => {
    return (
        <div className={css.rate}>
            <div className={css.checkbox}>
                {/*<CustomRadio radio={} isChecked={} onChange={}/>*/}
            </div>
        </div>
    );
};

export default Rate;