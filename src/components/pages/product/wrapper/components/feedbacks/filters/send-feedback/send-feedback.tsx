import React from 'react';
import css from './send-feedback.module.css'
import Link from "next/link";
import {useTranslation} from "next-i18next";

interface props {
id: number
}

const SendFeedback = ({id}: props) => {
    const {t} = useTranslation()



    return (
        <Link href={`/products/${id}/feedback`} className={css.btn}>
            {t('product.sendFeedback')}
        </Link>
    );
};

export default SendFeedback;