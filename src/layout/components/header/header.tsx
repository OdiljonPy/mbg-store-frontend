import React from 'react';
import css from './header.module.css'
import TopHeader from "@/layout/components/header/top-header/top-header";
import MainHeader from "@/layout/components/header/main-header/main-header";

interface props {

}

const Header = (props: props) => {
    return (
        <header className={css.header}>
            <TopHeader/>
            <MainHeader/>
        </header>
    );
};

export default Header;