import React from 'react';
import css from './filters.module.css'
import {Rate as RateCurrent} from "@/components/pages/product/wrapper/components/info/description/rate/rate";
import {useTranslations} from 'next-intl';
import {useRatingMock} from "@/components/pages/product/wrapper/components/feedbacks/filters/hooks/mock";
import Rating from "@/components/pages/product/wrapper/components/feedbacks/filters/rating/rating";
import {useParams, useSearchParams} from "next/navigation";
import SendFeedback from "@/components/pages/product/wrapper/components/feedbacks/filters/send-feedback/send-feedback";

interface props {

}

const Filters = (props: props) => {
    const {id} = useParams()
    const t = useTranslations()
    const items = useRatingMock()
    const searchParams = useSearchParams()


    const rating: string | null = searchParams.get('rating')
    return (
        <div className={css.filters}>
            <RateCurrent noMargin rate={4} count={150}/>
            <h4 className={css.title}>
                {t('product.showOnFeedback')}
            </h4>
            <Rating checked={!rating} item={items[0]}/>
            {items.map((item, index) => (
                index !== 0 && <Rating hasIcon item={item} key={item.key}/>
            ))}
            <SendFeedback id={Number(id)}/>
        </div>
    );
};

export default Filters;