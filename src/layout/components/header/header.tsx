import React from 'react';
import css from './header.module.css'
import TopHeader from "@/layout/components/header/top-header/top-header";

interface props {

}

const Header = (props: props) => {
    return (
        <header className={css.header}>
            <TopHeader/>
        </header>
    );
};

export default Header;