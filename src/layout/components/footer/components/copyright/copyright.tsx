import React from 'react';
import css from './copyright.module.css'
import {useTranslations} from 'next-intl';

interface props {

}

const Copyright = (props: props) => {
const t = useTranslations()
    const year = new Date().getFullYear()

    return (
        <p className={css.copyright}>
            ©{year}. MBGstore - {t('footer.copyright')}
        </p>
    );
};

export default Copyright;