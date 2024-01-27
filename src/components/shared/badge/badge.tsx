import React from 'react';
import css from './badge.module.css'

interface props {
    text: string
    color: string
}

const Badge = ({text, color}: props) => {
    return (
        <div className={css.badge} style={{background: color}}>
            {text}
        </div>
    );
};

export default Badge;