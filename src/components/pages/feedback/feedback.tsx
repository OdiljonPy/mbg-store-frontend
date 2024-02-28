import React, {useEffect} from 'react';
import css from './feedback.module.css'
import {useTranslations} from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import Preview from "@/components/pages/feedback/components/preview/preview";
import FeedbackForm from "@/components/pages/feedback/components/feedback-form/feedback-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchProductSingle} from "@/slices/product/productSingleSlices";
import {useRouter} from "next/router";

interface props {

}

const Feedback = (props: props) => {
    const t = useTranslations()
    const {info,loading} = useSelector((state:RootState) => state.product_single)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    useEffect(() => {
        dispatch(fetchProductSingle(router.query.id))
    }, []);
    return (
        <section className={css.page}>
            <div className={'container'}>
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/products',
                        label: t('products.title')
                    },
                    {
                        path: `/products/${info?.result?.id}`,
                        label: `${info?.result?.name}`
                    },
                    {
                        path: '/products/1/feedback',
                        label: t('product.sendFeedback')
                    }
                ]}/>
                <h1 className={css.title}>
                    {t('product.writeFeedback')}
                </h1>
                <div className={css.wrapper}>
                    <Preview img={info?.result?.images[0].image} />
                    <FeedbackForm info={info} loading={loading}/>
                </div>
            </div>
        </section>
    );
};

export default Feedback;