import React from 'react';
import css from './information.module.css'
import {useTranslation} from "next-i18next";
import Navigation from "@/layout/components/footer/components/information/navigation/navigation";
import Socials from "@/layout/components/footer/components/information/socials/socials";
import MobileAppQr from "@/layout/components/footer/components/mobile-app-qr/mobile-app-qr";

interface props {

}

const Information = (props: props) => {
    const {t} = useTranslation()
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