import React from 'react';
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import css from "@/components/pages/products/filters/stores/stores.module.css";
import {useTranslation} from "next-i18next";
import Sale from "@/components/pages/products/filters/sales/sale/sale";
import SaleSwitch from "@/components/pages/products/filters/sales/sale-switch/sale-switch";

interface props {

}


const storesList: ICustomCheckbox[] = [
    {
        id: 1,
        title: '80% и более',
        count: 120
    },
    {
        id: 2,
        title: '70% и более',
        count: 856
    },
    {
        id: 3,
        title: '60% и более',
        count: 123
    },
    {
        id: 4,
        title: '50% и более',
        count: 345
    }
]
const Sales = (props: props) => {
    const {t} = useTranslation()
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