import React from 'react';
import css from './nav.module.css'
import {useTranslation} from "next-i18next";
import {INav} from "@/layout/components/header/top-header/data-types/nav";
import Link from "next/link";
import {raleway} from "@/constants/fonts/fonts";
import {navTopList} from "@/constants/nav/nav";
import {usePathname} from "next/navigation";

interface props {

}


const Nav = (props: props) => {
    const {t} = useTranslation()
    const pathname = usePathname()
    return (
        <nav className={css.nav}>
            <ul className={css.list}>
                {navTopList.map(({
                                     path,
                                     title,
                                     query
                                 }) => (
                    <Link href={{
                        pathname: path,
                        query
                    }} className={`${css.item} ${raleway.className} ${path === pathname ? css.active : ''}`} key={path}>
                        {t(title)}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;