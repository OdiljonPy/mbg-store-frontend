import React from 'react';
import css from './list.module.css'
import {navTopList} from "@/constants/nav/nav";
import Link from "next/link";
import {useTranslations} from 'next-intl';

interface props {
    onClose: () => void
}

const List = ({onClose}: props) => {
    const t = useTranslations()
    return (
        <ul className={css.list}>
            {navTopList.map(({
                                 path,
                                 title,
                                 query
                             }) => (
                <Link href={{
                    pathname: path,
                    query
                }} onClick={onClose} key={path} className={css.item}>
                    {t(title)}
                </Link>
            ))}
        </ul>
    );
};

export default List;