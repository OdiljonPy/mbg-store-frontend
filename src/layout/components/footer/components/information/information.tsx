import React from 'react';
import css from './information.module.css'
import {useTranslations} from 'next-intl';
import Navigation from "@/layout/components/footer/components/information/navigation/navigation";
import Socials from "@/layout/components/footer/components/information/socials/socials";

interface props {

}

const Information = (props: props) => {
    const t = useTranslations()
    return (
        <div className={css.information}>
            <h3 className={css.title}>
                {t('footer.information')}
            </h3>
            <Navigation/>
            <Socials/>
        </div>
    );
};

export default Information;