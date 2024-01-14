import React from 'react';
import css from './list.module.css'
import {navTopList} from "@/constants/nav/nav";
import Link from "next/link";
import {useTranslation} from "next-i18next";

interface props {

}

const List = (props: props) => {
    const {t} = useTranslation()
    return (
        <ul className={css.list}>
            {navTopList.map(({
                path,
                title
                             }) => (
                <Link href={path} key={path} className={css.item}>
                    {t(title)}
                </Link>
            ))}
        </ul>
    );
};

export default List;