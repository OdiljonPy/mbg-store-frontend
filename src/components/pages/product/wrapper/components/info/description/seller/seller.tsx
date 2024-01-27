import React from 'react';
import css from './seller.module.css'
import {useTranslation} from "next-i18next";

interface props {
    seller: string
}

const Seller = ({seller}: props) => {
    const {t} = useTranslation()
    return (
        <p className={css.seller}>
            <span className={css.label}>
                {t('product.seller')}:
            </span>
            <span className={css.value}>
                {seller}
            </span>
        </p>
    );
};

export default Seller;