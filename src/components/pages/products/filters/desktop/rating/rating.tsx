import React from 'react';
import css from './rating.module.css'
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import {useTranslation} from "next-i18next";
import RatingToggler from "@/components/pages/products/filters/desktop/rating/rating-toggler/rating-toggler";
import Rate from "@/components/pages/products/filters/desktop/rating/rate/rate";
import {useRatingList} from "@/components/pages/products/filters/mobile/hooks/use-rating-list/use-rating-list";

interface props {

}


const Rating = (props: props) => {
    const {t} = useTranslation()
    const items = useRatingList()
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