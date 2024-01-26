import React from 'react';
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from "@/components/pages/products/filters/mobile/categories/option/option.module.css";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from '@/../public/images/icons/star.svg'
import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import CustomLabel from "@/components/pages/products/filters/desktop/rating/custom-label/custom-label";

interface props {
    item: ICustomRadio
    onClose: () => void
}

const Option = ({item, onClose}: props) => {
    const {key, title, count} = item
    const {
        watch,
        setValue
    } = useFormContext<IFilters>()

    const onSetValue = () => {
        setValue('rating', key.toString())
        setValue('withFeedback', true)
        onClose()
    }

    const rating = watch('rating')

    return (
        <CustomRadio radio={item} options={{
            onChange: onSetValue,
            disabled: false,
            checked: rating === key
        }}>
            <CustomLabel title={title} count={count}/>
        </CustomRadio>
    );
};

export default Option;