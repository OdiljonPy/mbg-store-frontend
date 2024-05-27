import React, {ChangeEvent} from 'react';
import css from './rating.module.css'
import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import {ICustomRadio, IOptions} from "@/components/shared/custom-radio/data-types/custom-radio";
import star from '@/../public/images/icons/star.svg'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useTranslations} from 'next-intl';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import Skeleton from "react-loading-skeleton";

interface IProps {
    item: ICustomRadio
    hasIcon?: boolean
    checked?: boolean
    loading:boolean
}

const Rating = ({item, hasIcon, checked,loading}: IProps) => {
    const t = useTranslations()

    const searchParams = useSearchParams()
    const rating: string | null = searchParams.get('rating')
    const pathname = usePathname()

    const {push, query} = useRouter()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const queries: ParsedUrlQuery = {
            ...query
        }

        if (e.target.checked && e.target.value.length) {
            queries.rating = key
        } else {
            delete queries.rating
        }

        push({
            pathname,
            query: queries
        }, undefined, {scroll: false})
    }


    const {title, count, key} = item
    const options: IOptions = {
        onChange,
        checked: checked ?? key === rating,
        disabled: false
    }

    return (
        <CustomRadio radio={item} options={options}>
            <div className={css.ratingInner}>
                <div className={`${css.icon} ${hasIcon ? css.show : ''}`}>
                    <ResponsiveImage src={star} alt={t('rating.title')}/>
                </div>
                <p className={css.title}>
                    {title}
                </p>
                {
                    loading ? <Skeleton count={1} width={120}/> :
                    <p className={css.count}>
                        ({count} {t('products.rates').toLowerCase()})
                    </p>
                }
            </div>
        </CustomRadio>
    );
};

export default Rating;