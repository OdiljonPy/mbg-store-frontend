import React from 'react';
import css from './heading-line.module.css'
import {useTranslation} from "next-i18next";

interface props {
title: string
}

const HeadingLine = ({title}: props) => {
    const {t} = useTranslation()
    return (
        <h1 className={css.title}>
            {t(title)}
        </h1>
    );
};

export default HeadingLine;