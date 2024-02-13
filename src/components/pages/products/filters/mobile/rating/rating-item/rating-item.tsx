import React from 'react';
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item.module.css";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";
import star from '@/../public/images/icons/star.svg'

interface props {
    item: ICustomRadio
}

const RatingItem = ({item}: props) => {
    const {
        watch,
        setValue
    } = useFormContext<IFilters>()

    const rating: string | undefined = watch('rating')
    const withFeedback: boolean | undefined = watch('withFeedback')

    const {
        title,
        count,
        key
    } = item


    const onSetRating = () => {
        setValue('rating', key.toString())
        setValue('withFeedback', true)
    }


    return (
        <label onClick={onSetRating} className={`${css.item} ${rating === key.toString() ? css.active : ''}`}>
            <input className={css.input} value={key} type={'radio'}/>
            <span className={css.icon}>
                <ResponsiveImage src={star} alt={title}/>
             </span>
            <span className={css.title}>
                {title}
             </span>
            <span className={css.count}>
                {count}
             </span>
        </label>
    );
};

export default RatingItem;