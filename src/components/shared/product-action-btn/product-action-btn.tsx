import React from 'react';
import css from './product-action-btn.module.css'
import {IActionBtnProps} from "@/components/shared/product-action-btn/data-types/action-btn";


const ProductActionBtn = ({img, classNames, onClick}: IActionBtnProps) => {
    return (
        <button className={`${css.btn} ${classNames}`} onClick={onClick}>
            {img}
        </button>
    );
};

export default ProductActionBtn;