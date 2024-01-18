import React from 'react';
import css from './reset-filters.module.css'
import {useTranslation} from "next-i18next";

interface props {

}

const ResetFilters = (props: props) => {
    const {t} = useTranslation()
    return (
        <button type={'button'} className={css.btn}>
            {t('filters.reset')}
        </button>
    );
};

export default ResetFilters;