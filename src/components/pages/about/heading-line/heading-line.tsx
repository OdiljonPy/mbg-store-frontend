import React from 'react';
import css from './heading-line.module.css'
import {useTranslations} from 'next-intl';

interface props {
title: string
}

const HeadingLine = ({title}: props) => {
    const t = useTranslations()
    return (
        <h1 className={css.title}>
            {t(title)}
        </h1>
    );
};

export default HeadingLine;