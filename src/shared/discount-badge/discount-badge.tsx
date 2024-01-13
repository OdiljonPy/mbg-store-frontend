import React from 'react';
import css from './discount-badge.module.css'

interface props {
discount_percentage: number
}

const DiscountBadge = ({discount_percentage}: props) => {
    return (
        <div className={css.discount}>
            -{discount_percentage}%
        </div>
    );
};

export default DiscountBadge;