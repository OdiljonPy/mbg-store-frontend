import React from 'react';
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import logo from '../../../../public/images/icons/logo.svg'
import Link from "next/link";
import css from './logo.module.css'



const Logo = () => {
    return (
        <Link href={'/'} className={css.logo}>
            <ResponsiveImage src={logo} alt={'MGB store'}/>
        </Link>
    );
};

export default Logo;