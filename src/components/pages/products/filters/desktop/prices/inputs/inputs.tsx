import React from 'react';
import css from './inputs.module.css'
import Input from "@/components/pages/products/filters/desktop/prices/inputs/input/input";
import {useTranslations} from 'next-intl';

interface props {
    priceRange: number[]
}

const Inputs = ({priceRange}: props) => {
    const t = useTranslations()
    return (
        <div className={css.wrapper}>
            <Input label={t('from').toLowerCase()} price={priceRange[0]}/>
            <Input label={t('to').toLowerCase()} price={priceRange[1]}/>
        </div>
    );
};

export default Inputs;