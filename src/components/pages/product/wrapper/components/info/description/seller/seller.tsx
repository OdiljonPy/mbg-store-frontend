import React from 'react';
import css from './seller.module.css'
import {useTranslations} from 'next-intl';
import {IStore} from "@/data-types/products/common";

interface props {
    seller: string
}

const Seller = ({seller}: props) => {
    const t = useTranslations()
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