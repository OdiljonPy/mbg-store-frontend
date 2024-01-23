import React from 'react';
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import css from "@/components/pages/products/filters/desktop/stores/stores.module.css";
import {useTranslation} from "next-i18next";
import Sale from "@/components/pages/products/filters/desktop/sales/sale/sale";
import SaleSwitch from "@/components/pages/products/filters/desktop/sales/sale-switch/sale-switch";

interface props {

}



const Sales = (props: props) => {

    const {t} = useTranslation()

    const storesList: ICustomCheckbox[] = [
        {
            id: 1,
            title: t('sales.more', {count: 80}),
            count: 120
        },
        {
            id: 2,
            title: t('sales.more', {count: 70}),
            count: 856
        },
        {
            id: 3,
            title: t('sales.more', {count: 60}),
            count: 123
        },
        {
            id: 4,
            title: t('sales.more', {count: 50}),
            count: 345
        }
    ]

    return (
        <FilterCollapse title={t('sales.sale')}>
            <div className={css.stores}>
                <SaleSwitch/>
                {storesList.map((item) => (
                    <Sale item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Sales;