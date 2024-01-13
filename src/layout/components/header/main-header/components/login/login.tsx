import React from 'react';
import css from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge.module.css";
import {raleway} from "@/constants/fonts";
import loginCss from './login.module.css'
import ResponsiveImage from "@/shared/responsive-image/responsive-image";
import {useTranslation} from "next-i18next";
import user from '@/../public/images/icons/user.svg'

interface props {

}

const Login = (props: props) => {
    const {t} = useTranslation()
    return (
        <>
            <button className={`${css.menuItem} ${loginCss.btn} ${raleway.className}`}>

            <span className={css.icon}>
                <ResponsiveImage src={user} alt={t('header.login')}/>
            </span>
                <span className={css.text}>
                {t('header.login')}
            </span>
            </button>
        </>
    );
};

export default Login;