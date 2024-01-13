import React from 'react';
import css from './badge.module.css'

interface props {
count: number
}

const Badge = ({count}: props) => {
    return (
        <div className={css.badge}>
            {count}
        </div>
    );
};

export default Badge;