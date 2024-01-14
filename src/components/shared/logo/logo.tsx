import React from 'react';
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import logo from '../../../../public/images/icons/logo.svg'
import Link from "next/link";



const Logo = () => {
    return (
        <Link href={'/'}>
            <ResponsiveImage src={logo} alt={'MGB store'}/>
        </Link>
    );
};

export default Logo;