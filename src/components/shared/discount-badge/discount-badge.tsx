import React from 'react';
import css from './discount-badge.module.css'

interface props {
discount_percentage?: number
    className?: string

}

const DiscountBadge = ({discount_percentage, className}: props) => {
    return (
        <div className={`${css.discount} ${className ? className : ''}`}>
            -{discount_percentage}%
        </div>
    );
};

export default DiscountBadge;