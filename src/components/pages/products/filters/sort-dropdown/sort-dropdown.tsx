import React from 'react';
import css from './sort-dropdown.module.css'
import {Dropdown} from "antd";
import {useTranslation} from "next-i18next";
import {useSearchParams} from "next/navigation";
import {raleway} from "@/constants/fonts/fonts";

interface props {

}

const SortDropdown = (props: props) => {
    const {t} = useTranslation()
    const searchParams = useSearchParams()
    const sort: string | null = searchParams.get('sort')
    return (
        <Dropdown trigger={['click']}>
            <button className={`${css.btn} ${raleway.className}`}>
                {t('fromBeginning')}: <span className={css.sort}>{t(`filters.sorting.${sort}`)}</span>
            </button>
        </Dropdown>
    );
};

export default SortDropdown;