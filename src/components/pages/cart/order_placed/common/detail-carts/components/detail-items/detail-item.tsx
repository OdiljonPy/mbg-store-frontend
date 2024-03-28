import css from './detail-item.module.css'
import {ReactElement} from "react";

interface props {
    label: string
    value?: string | number
    className?: string
    label_prefix?:ReactElement
}

const DetailItem
    = ({label, value, className,label_prefix}: props) => {
    return (
        <div className={`${css.item} ${className ? className : ''}`}>
            <h5 className={css.label}>
                {label}{label_prefix}
            </h5>
            <p className={`${css.value} `}>
                {value}
            </p>
        </div>
    );
};

export default DetailItem
;