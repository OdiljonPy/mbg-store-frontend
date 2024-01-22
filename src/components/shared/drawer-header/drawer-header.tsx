import React from 'react';
import css from './drawer-header.module.css'
import {useTranslation} from "next-i18next";
import {raleway} from "@/constants/fonts/fonts";

interface props {
    title: string
    count?: number
    classNames?:string
}

const DrawerHeader = ({title, count, classNames}: props) => {

    const {t} = useTranslation()

    return (
        <div className={`${css.header} ${classNames ? classNames : ''}`}>
            <h3 className={css.title}>
                <p className={css.text}>
                    {title}
                </p>
                <p className={`${css.count} ${count ? css.show : ''}`}>
                    {count}
                </p>
            </h3>
            <button className={`${css.reset} ${!count? css.hide : ''} ${raleway.className}`}>
                {t('reset')}
            </button>
        </div>
    );
};

export default DrawerHeader;