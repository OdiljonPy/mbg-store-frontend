import React from 'react';
import css from './add-to-card.module.css'
import {useTranslation} from "next-i18next";

interface props {

}

const AddToCard = (props: props) => {
    const {t} = useTranslation()
    return (
        <button className={css.btn}>
            {t('product.addToCart')}
        </button>
    );
};

export default AddToCard;