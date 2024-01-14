import React from 'react';
import css from './nav.module.css'
import {useTranslation} from "next-i18next";
import {INav} from "@/layout/components/header/top-header/data-types/nav";
import Link from "next/link";
import {raleway} from "@/constants/fonts/fonts";
import {navTopList} from "@/constants/nav/nav";

interface props {

}





const Nav = (props: props) => {
    const {t} = useTranslation()
    return (
        <nav className={css.nav}>
            <ul className={css.list}>
                {navTopList.map(({
                    path,
                    title
                              }) => (
                    <Link href={path} className={`${css.item} ${raleway.className}`} key={path}>
                        {t(title)}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;