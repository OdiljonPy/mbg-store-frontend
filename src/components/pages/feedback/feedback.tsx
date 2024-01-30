import React from 'react';
import css from './feedback.module.css'
import {useTranslations} from "next-intl";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";

interface props {

}

const Feedback = (props: props) => {
    const t = useTranslations()
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
                        path: '/products/1',
                        label: "Кукуруза Bonduelle Classique сладкая"
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
                </div>
            </div>
        </section>
    );
};

export default Feedback;