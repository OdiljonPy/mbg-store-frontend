import React from 'react';
import css from './reset-filters.module.css'
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {usePathname, useSearchParams} from "next/navigation";

interface props {

}

const ResetFilters = (props: props) => {
    const {t} = useTranslation()
    const {push} = useRouter()
    const searchParams = useSearchParams()
    const pathname: string = usePathname()
    const filters: string | null = searchParams.get('filters')

    const onReset = () => push({
        pathname, query: {
            filters: filters
        }
    }, undefined, {
        scroll: false
    })
    return (
        <button onClick={onReset} type={'button'} className={css.btn}>
            {t('filters.reset')}
        </button>
    );
};

export default ResetFilters;