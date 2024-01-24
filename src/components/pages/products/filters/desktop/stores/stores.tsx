import React from 'react';
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import {useTranslation} from "next-i18next";
import css from './stores.module.css'
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import Store from "@/components/pages/products/filters/desktop/stores/store/store";
import Search from "@/components/pages/products/filters/desktop/stores/search/search";
import {storesList} from "@/constants/stores/stores";

interface props {

}




const Stores = (props: props) => {
    const {t} = useTranslation()

    return (
        <FilterCollapse title={t('header.stores')}>
            <div className={css.stores}>
                <Search/>
                {storesList.map((item) => (
                    <Store item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Stores;