import React from 'react';
import css from './main-header.module.css'
import Logo from "@/shared/logo/logo";
import CatalogSelect from "@/layout/components/header/main-header/components/catalog-select/catalog-select";
import ProductsSearch from "@/layout/components/header/main-header/components/products-search/products-search";
import LanguageSwitcher from "@/layout/components/header/main-header/components/language-switcher/language-switcher";
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import {cartBadge, favouritesBadge} from "@/constants/badges";
import Login from "@/layout/components/header/main-header/components/login/login";

interface props {

}

const MainHeader = (props: props) => {
    return (
        <div className={css.header}>
            <div className={'container'}>
                <div className={css.wrapper}>
                    <div className={css.logo}>
                        <Logo/>
                    </div>
                    <div className={css.search}>
                        <CatalogSelect/>
                        <ProductsSearch/>
                    </div>
                    <div className={css.nav}>
                        <LanguageSwitcher/>
                        <MenuItemBadge badge={favouritesBadge}/>
                        <Login/>
                        <MenuItemBadge badge={cartBadge}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;