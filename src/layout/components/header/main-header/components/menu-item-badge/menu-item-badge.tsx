import React from 'react';
import css from './menu-item-badge.module.css'
import {IBadge} from "@/layout/components/header/main-header/data-types/badge";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import {raleway} from "@/constants/fonts/fonts";
import {Badge} from "antd";

interface props {
    badge: IBadge
}

const MenuItemBadge = ({badge}: props) => {
    const t = useTranslations()
    const {icon, title, count, path} = badge
    return (
        <Link href={path} className={`${css.menuItem}  ${raleway.className}`}>
            <Badge count={count} style={{backgroundColor: '#39B969', borderColor: 'transparent'}}>
            <span className={css.icon}>
            {icon}
            </span>
            </Badge>
            <span className={css.text}>
                {t(title)}
            </span>
        </Link>
    );
};

export default MenuItemBadge;