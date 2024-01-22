import React from 'react';
import css from './reset-filters.module.css'
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {usePathname, useSearchParams} from "next/navigation";

interface props {

}

const diffFilters: string[] = ['filters', 'search', 'sort']

const ResetFilters = (props: props) => {
    const {t} = useTranslation()
    const {push, query} = useRouter()
    const searchParams = useSearchParams()
    const pathname: string = usePathname()
    const filters: string | null = searchParams.get('filters')


    const activeFilters = Object.keys(query).filter((item) => !diffFilters.includes(item))


    const onReset = () => push({
        pathname, query: {
            filters: filters,
            sort: 'popular'
        }
    }, undefined, {
        scroll: false
    })
    return (
        <button onClick={onReset} type={'button'}
                className={`${css.btn} ${activeFilters.length ? css.active : ''}`}>
            {t('filters.reset')} <span
            className={`${css.info} ${activeFilters.length ? css.show : ''}`}>{activeFilters.length}</span>
        </button>
    );
};

export default ResetFilters;