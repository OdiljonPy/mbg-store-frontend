import React from 'react';
import css from './rating.module.css'
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {useTranslation} from "next-i18next";
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";

interface props {

}

// const items: ICustomRadio[] = [
//     {
//        name: 'rating',
//         key: '4',
//
//     }
// ]

const Rating = (props: props) => {
    const {t} = useTranslation()
    return (
        <FilterCollapse title={t('rating.title')}>
            <div className={css.rating}>

            </div>
        </FilterCollapse>
    );
};

export default Rating;