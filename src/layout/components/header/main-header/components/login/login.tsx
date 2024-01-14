import React from 'react';
import css from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge.module.css";
import {raleway} from "@/constants/fonts/fonts";
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
                <svg width="32" height="32" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M25.061 22.8438C23.2762 19.7582 20.5258 17.5457 17.3161 16.4969C18.9038 15.5517 20.1373 14.1115 20.8272 12.3974C21.5172 10.6833 21.6254 8.79017 21.1353 7.00864C20.6451 5.2271 19.5837 3.65571 18.1141 2.53579C16.6444 1.41586 14.8478 0.809326 13 0.809326C11.1523 0.809326 9.35566 1.41586 7.88601 2.53579C6.41636 3.65571 5.35496 5.2271 4.86482 7.00864C4.37467 8.79017 4.48289 10.6833 5.17284 12.3974C5.86279 14.1115 7.09633 15.5517 8.68403 16.4969C5.47426 17.5445 2.72387 19.757 0.939105 22.8438C0.873655 22.9505 0.830242 23.0692 0.811428 23.193C0.792614 23.3168 0.798781 23.4431 0.829563 23.5644C0.860346 23.6858 0.915122 23.7997 0.990658 23.8995C1.06619 23.9994 1.16096 24.0831 1.26937 24.1457C1.37778 24.2083 1.49763 24.2486 1.62185 24.2641C1.74607 24.2797 1.87215 24.2702 1.99265 24.2362C2.11314 24.2023 2.22561 24.1445 2.32343 24.0664C2.42124 23.9882 2.50241 23.8913 2.56215 23.7813C4.76996 19.9656 8.67231 17.6875 13 17.6875C17.3278 17.6875 21.2301 19.9656 23.4379 23.7813C23.4977 23.8913 23.5788 23.9882 23.6767 24.0664C23.7745 24.1445 23.8869 24.2023 24.0074 24.2362C24.1279 24.2702 24.254 24.2797 24.3782 24.2641C24.5025 24.2486 24.6223 24.2083 24.7307 24.1457C24.8391 24.0831 24.9339 23.9994 25.0094 23.8995C25.085 23.7997 25.1397 23.6858 25.1705 23.5644C25.2013 23.4431 25.2075 23.3168 25.1887 23.193C25.1698 23.0692 25.1264 22.9505 25.061 22.8438ZM6.43754 9.25001C6.43754 7.95207 6.82243 6.68328 7.54352 5.60408C8.26462 4.52489 9.28954 3.68375 10.4887 3.18705C11.6878 2.69035 13.0073 2.5604 14.2803 2.81361C15.5533 3.06683 16.7226 3.69184 17.6404 4.60963C18.5582 5.52741 19.1832 6.69673 19.4364 7.96973C19.6897 9.24273 19.5597 10.5622 19.063 11.7614C18.5663 12.9605 17.7252 13.9854 16.646 14.7065C15.5668 15.4276 14.298 15.8125 13 15.8125C11.2601 15.8107 9.59201 15.1187 8.36171 13.8883C7.13141 12.658 6.4394 10.9899 6.43754 9.25001Z"
    fill="#232323"/>
</svg>

            </span>
                <span className={css.text}>
                {t('header.login')}
            </span>
            </button>
        </>
    );
};

export default Login;