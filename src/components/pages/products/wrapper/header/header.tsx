import React from 'react';
import css from './header.module.css'
import Title from "@/components/pages/products/wrapper/title/title";
import ProductsCount from "@/components/pages/products/wrapper/products-count/products-count";
import FiltersToggler from "@/components/pages/products/wrapper/header/filters-toggler/filters-toggler";
import SortDropdown from "@/components/pages/products/filters/desktop/sort-dropdown/sort-dropdown";
import MobileFilters from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters";
import MobileSort from "@/components/pages/products/filters/mobile/mobile-sort/mobile-sort";

interface props {

}

const Header = (props: props) => {
    return (
        <div className={css.wrapper}>
            <div className={css.info}>
                <Title/>
                <ProductsCount/>
            </div>
            <div className={css.actions}>
                <MobileFilters/>
                <FiltersToggler/>
                <SortDropdown/>
                <MobileSort/>
            </div>
        </div>
    );
};

export default Header;