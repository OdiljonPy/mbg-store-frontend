import React from 'react';
import css from './main-header.module.css'
import Logo from "@/shared/logo/logo";
import CatalogSelect from "@/layout/components/header/main-header/components/catalog-select/catalog-select";
import ProductsSearch from "@/layout/components/header/main-header/components/products-search/products-search";

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
                    <div className={css.nav}>
                        <CatalogSelect/>
                        <ProductsSearch/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;