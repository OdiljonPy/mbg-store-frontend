import React from 'react';
import css from './header.module.css'
import Title from "@/components/pages/products/wrapper/title/title";
import ProductsCount from "@/components/pages/products/wrapper/products-count/products-count";
import FiltersToggler from "@/components/pages/products/wrapper/header/filters-toggler/filters-toggler";
import SortDropdown from "@/components/pages/products/filters/sort-dropdown/sort-dropdown";

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
                <FiltersToggler/>
                <SortDropdown/>
            </div>
        </div>
    );
};

export default Header;