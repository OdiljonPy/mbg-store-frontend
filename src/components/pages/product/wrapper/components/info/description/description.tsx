import React from 'react';
import css from './description.module.css'
import {useTranslation} from "next-i18next";
import Badge from "@/components/shared/badge/badge";

interface props {

}

const Description = (props: props) => {
    const {t} = useTranslation()
    return (
        <div className={css.description}>
            <h1 className={css.title}>
                Кукуруза Bonduelle Classique сладкая
            </h1>
            <div className={css.text}>
                <p className={css.weight}>
                    170г
                </p>
                <Badge text={t('product.has')} color={'#60C787'}/>
            </div>
        </div>
    );
};

export default Description;