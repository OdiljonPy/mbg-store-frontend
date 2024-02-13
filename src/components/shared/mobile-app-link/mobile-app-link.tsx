import React, {ReactElement} from 'react';
import css from './mobile-app-link.module.css'

interface props {
    icon: ReactElement
    path: string,
    isBanner?:boolean
}

const MobileAppLink = ({icon, path,isBanner}: props) => {
    return (
        <a href={path} target={'_blank'} rel={'noreferrer'} className={`${css.mobileApp} ${isBanner && css.mobileBanner}` }>
            {icon}
        </a>
    );
};

export default MobileAppLink;