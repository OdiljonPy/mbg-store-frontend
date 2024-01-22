import React from 'react';
import css from './rating.module.css'
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {useTranslation} from "next-i18next";
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";
import RatingToggler from "@/components/pages/products/filters/rating/rating-toggler/rating-toggler";
import CustomLabel from "@/components/pages/products/filters/rating/custom-label/custom-label";
import Rate from "@/components/pages/products/filters/rating/rate/rate";

interface props {

}



const Rating = (props: props) => {
    const {t} = useTranslation()
    const items: ICustomRadio[] = [
        {
            name: 'rating',
            key: '4',
            title: t('rating.rate', {count: 4}),
            count: 15
        },
        {
            name: 'rating',
            key: '3',
            title: t('rating.rate', {count: 3}),
            count: 15
        },
        {
            name: 'rating',
            key: '2',
            title: t('rating.rate', {count: 2}),
            count: 15
        },
        {
            name: 'rating',
            key: '1',
            title: t('rating.rate', {count: 1}),
            count: 15
        }
    ]
    return (
        <FilterCollapse title={t('rating.title')}>
            <div className={css.rating}>
                <RatingToggler/>
                {items.map((item) => (
                    <Rate rate={item} key={item.key}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Rating;