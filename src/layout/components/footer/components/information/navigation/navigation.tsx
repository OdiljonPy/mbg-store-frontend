import React from 'react';
import css from './navigation.module.css'
import Link from "next/link";
import {navigationList} from "@/constants/nav";
import {useTranslation} from "next-i18next";

interface props {

}

const Navigation = (props: props) => {
    const {t} = useTranslation()
    return (
        <nav className={css.nav}>
            {navigationList.map(({
                                     path,
                                     title
                                 }) => (
                <Link href={path} className={css.link}>
                    {t(title)}
                </Link>
            ))}

        </nav>
    );
};

export default Navigation;