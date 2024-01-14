import React from 'react';
import css from './mobile-app-qr.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import qr from '@/../public/images/icons/qr.svg'
import {useTranslation} from "next-i18next";

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
        </div>
    );
};

export default MobileAppQr;