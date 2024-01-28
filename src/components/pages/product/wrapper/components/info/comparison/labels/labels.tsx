import React from 'react';
import css from './labels.module.css'
import {useTranslation} from "next-i18next";

interface props {

}


const Labels = (props: props) => {
    const {t} = useTranslation()


    const labelItems: string[] = [t('product.title'), t('product.price'), t('rating.title'), t('product.seller')]

    return (
        <div className={css.fields}>
            <div className={css.icon}/>
            {labelItems.map((item, index) => (
                <p className={`${css.field} ${index === labelItems.length -1 ? css.last: ''} ${index === 0 ? css.fieldSmall : ''}`}>
                    {item}
                </p>
            ))}
        </div>
    );
};

export default Labels;