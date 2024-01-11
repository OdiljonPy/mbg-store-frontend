import React from 'react';
import css from './header.module.css'
import {useTranslation} from "next-i18next";
import TopHeader from "@/layout/components/header/top-header/top-header";

interface props {

}

const Header = (props: props) => {
    return (
        <header className={css.header}>
            <div className={'container'}>
                <TopHeader/>
            </div>
        </header>
    );
};

export default Header;