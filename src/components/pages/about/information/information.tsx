import React from 'react';
import css from './information.module.css'
import {useTranslation} from "next-i18next";
import InformationList from "@/components/pages/about/information/information-list/information-list";

interface props {

}

const Information = (props: props) => {
    const {t} = useTranslation()
    return (
        <section className={css.info}>
            <h1 className={css.title}>
                {t('about.title')}
            </h1>
            <InformationList/>
        </section>
    );
};

export default Information;