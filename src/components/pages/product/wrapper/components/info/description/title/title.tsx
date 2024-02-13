import React from 'react';
import css from './title.module.css'
interface props {
title: string
}

const Title = ({title}: props) => {
    return (
        <h1 className={css.title}>
            {title}
        </h1>
    );
};

export default Title;