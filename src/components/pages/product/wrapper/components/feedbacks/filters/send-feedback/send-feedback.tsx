import React from 'react';
import css from './send-feedback.module.css'
import Link from "next/link";
import {useTranslations} from 'next-intl';

interface props {
id: number
}

const SendFeedback = ({id}: props) => {
    const t = useTranslations()



    return (
        <Link href={`/products/${id}/feedback`} className={css.btn}>
            {t('product.sendFeedback')}
        </Link>
    );
};

export default SendFeedback;