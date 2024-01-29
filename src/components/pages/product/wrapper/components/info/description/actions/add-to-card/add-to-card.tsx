import React from 'react';
import css from './add-to-card.module.css'
import {useTranslations} from 'next-intl';

interface props {

}

const AddToCard = (props: props) => {
    const t = useTranslations()
    return (
        <button className={css.btn}>
            {t('product.addToCart')}
        </button>
    );
};

export default AddToCard;