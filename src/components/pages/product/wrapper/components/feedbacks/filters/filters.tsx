import React, {useEffect} from 'react';
import css from './filters.module.css'
import {Rate as RateCurrent} from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import {useTranslations} from 'next-intl';
import {useRatingMock} from "@/components/pages/product/wrapper/components/feedbacks/filters/hooks/mock";
import Rating from "@/components/pages/product/wrapper/components/feedbacks/filters/rating/rating";
import {useParams, useSearchParams} from "next/navigation";
import SendFeedback from "@/components/pages/product/wrapper/components/feedbacks/filters/send-feedback/send-feedback";
import {IRatingCount} from "@/data-types/products/product-comments/product-comments";

interface props {
    loading:boolean
    rating:number,
    all_rating:number
    rating_count:IRatingCount
}

const Filters = ({loading,rating:rate,all_rating,rating_count}: props) => {
    const {id} = useParams()
    const t = useTranslations()
    const items = useRatingMock()
    const searchParams = useSearchParams()

    items[0].count = all_rating
    // @ts-ignore
    Array.from({length:5},(_,idx:number)=> items[idx+1].count = rating_count?.[idx+1])

    const rating: string | null = searchParams.get('rating')
    return (
        <div className={css.filters}>
            <RateCurrent noMargin rate={rate} count={all_rating}/>
            <h4 className={css.title}>
                {t('product.showOnFeedback')}
            </h4>
            <Rating loading={loading} checked={!rating} item={items[0]}/>
            {items.map((item, index) => (
                index !== 0 && <Rating loading={loading} hasIcon item={item} key={item.key}/>
            ))}
            <SendFeedback id={Number(id)}/>
        </div>
    );
};

export default Filters;