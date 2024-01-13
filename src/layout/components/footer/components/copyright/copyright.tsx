import React from 'react';
import css from './copyright.module.css'
import {useTranslation} from "next-i18next";

interface props {

}

const Copyright = (props: props) => {
const {t} = useTranslation()
    const year = new Date().getFullYear()

    return (
        <p className={css.copyright}>
            ©{year}. MBGstore - {t('footer.copyright')}
        </p>
    );
};

export default Copyright;