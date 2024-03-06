"use client"
import React from 'react';
import css from './main-header.module.css'
import Logo from "@/components/shared/logo/logo";
import CatalogSelect from "@/layout/components/header/main-header/components/catalog-select/catalog-select";
import LanguageSwitcher from "@/layout/components/header/main-header/components/language-switcher/language-switcher";
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import {cartBadge, favouritesBadge} from "@/constants/badges/badges";
import Login from "@/layout/components/header/main-header/components/login/login";
import dynamic from "next/dynamic";
import LogoMobile from "@/components/shared/logo-mobile/logo-mobile";
import MobileNav from "@/layout/components/header/main-header/components/mobile-nav/mobile-nav";

const ProductsSearch = dynamic(() => import('@/layout/components/header/main-header/components/products-search/products-search'), {
    ssr: false
})

interface props {
    setLoginModalOpen: (value: boolean) => void
}

interface RootState {
    auth: {
        isLoggedIn: boolean
    };
}


const MainHeader = ({setLoginModalOpen}: props) => {

    return (
        <div className={css.header}>
            <div className={'container'}>
                <div className={css.wrapper}>
                    <div className={css.logo}>
                        <Logo/>
                    </div>
                    <div className={css.mobileLogo}>
                        <LogoMobile/>
                    </div>
                    <div className={css.search}>
                        <CatalogSelect/>
                        <ProductsSearch/>
                    </div>
                    <MobileNav/>
                    <div className={css.nav}>
                        <LanguageSwitcher/>
                        <MenuItemBadge badge={favouritesBadge}/>
                        <Login setLoginModalOpen={setLoginModalOpen}/>
                        <MenuItemBadge badge={cartBadge}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;