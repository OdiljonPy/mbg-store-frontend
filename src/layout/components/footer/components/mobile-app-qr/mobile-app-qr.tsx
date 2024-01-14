import React from 'react';
import css from './mobile-app-qr.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import qr from '@/../public/images/icons/qr.svg'
import {useTranslation} from "next-i18next";
import MobileApp from "@/components/pages/home/hero/components/hero-swiper/hero-swiper-item/info/mobile-app/mobile-app";

interface props {

}

const MobileAppQr = (props: props) => {
    const {t} = useTranslation()
    return (
        <div className={css.qr}>
            <div className={css.icon}>
                <ResponsiveImage src={qr} alt={'Mobile App'}/>
            </div>
            <p className={css.text}>
                {t('footer.qr')}
            </p>
            <h4 className={css.title}>
                {t('footer.mgbStore')}
            </h4>
            <div className={css.app}>
                <MobileApp/>
            </div>
        </div>
    );
};

export default MobileAppQr;