import React, {ReactElement} from 'react';
import css from './mobile-app-link.module.css'
import Link from "next/link";

interface props {
    icon: ReactElement
    path: string
}

const MobileAppLink = ({icon, path}: props) => {
    return (
        <a href={path} target={'_blank'} rel={'noreferrer'} className={css.mobileApp}>
            {icon}
        </a>
    );
};

export default MobileAppLink;