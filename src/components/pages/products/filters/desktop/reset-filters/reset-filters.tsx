import React, {useEffect} from 'react';
import css from './reset-filters.module.css'
import {useTranslations} from 'next-intl';
import {useRouter} from "next/router";
import {usePathname, useSearchParams} from "next/navigation";

interface props {

}

const diffFilters: string[] = ['filters', 'changeFilter', 'search', 'sort','category_id','clear_filter','hasDelivery']

const ResetFilters = (props: props) => {
    const t = useTranslations()
    const {push, query} = useRouter()
    const searchParams = useSearchParams()
    const pathname: string = usePathname()
    const filters: string | null = searchParams.get('filters')


    const activeFilters = Object.keys(query).filter((item) => !diffFilters.includes(item))
    useEffect(() => {
        if(activeFilters.length){
            push({
                pathname,
                query:{
                    ...query,
                    clear_filter:false
                }
            })
        }
    }, [activeFilters.length]);
    const onReset = () => push({
        pathname, query: {
            filters: filters,
            sort: 'popular',
            clear_filter:true
        }
    }, undefined, {
        scroll: false
    })
    return (
        <button onClick={onReset} type={'button'}
                className={`${css.btn} ${activeFilters.length ? css.active : ''}`}>
            {t('filters.reset')} <span
            className={`${css.info} ${activeFilters.length >= 10 ? css.large : ''} ${activeFilters.length ? css.show : ''}`}>{activeFilters.length}</span>
        </button>
    );
};

export default ResetFilters;