import React from 'react';
import css from './menu-item-badge.module.css'
import {IBadge} from "@/layout/components/header/main-header/data-types/badge";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import {raleway} from "@/constants/fonts/fonts";
import {Badge} from "antd";
import {usePathname} from "next/navigation";

interface props {
    badge: IBadge
    mobile?:boolean
}

const MenuItemBadge = ({badge,mobile}: props) => {
    const t = useTranslations()
    const {icon, title, count, path} = badge

    const pathname = usePathname()


    return (
        <Link href={path} className={`${css.menuItem} ${pathname === path ? css.active :''}  ${raleway.className}`}>
            <Badge count={count} style={{backgroundColor: '#39B969', borderColor: 'transparent'}}>
            <span className={`${css.icon} ${mobile ? css.mobile_icon:''}`}>
            {icon}
            </span>
            </Badge>
            {
                !mobile && <span className={css.text}>
                {t(title)}
            </span>
            }
        </Link>
    );
};

export default MenuItemBadge;