import React from 'react';
import Link from "next/link";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import logo from "../../../../public/images/icons/mobile-logo.svg";

interface props {

}

const LogoMobile = (props: props) => {
    return (
        <Link href={'/'}>
            <ResponsiveImage src={logo} alt={'MGB store'}/>
        </Link>
    );
};

export default LogoMobile;