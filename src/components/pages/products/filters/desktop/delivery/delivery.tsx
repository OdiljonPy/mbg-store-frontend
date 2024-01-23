import React from 'react';
import css from './delivery.module.css'
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import {useTranslation} from "next-i18next";
import DeliverySwitch from "@/components/pages/products/filters/desktop/delivery/delivery-switch/delivery-switch";
import Store from "@/components/pages/products/filters/desktop/stores/store/store";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import DeliveryItem from "@/components/pages/products/filters/desktop/delivery/delivery/delivery";

interface props {

}


const Delivery = (props: props) => {
    const {t} = useTranslation()
    const storesList: ICustomCheckbox[] = [
        {
            id: 1,
            title: t('filters.delivery.free'),
            count: 2132
        },
        {
            id: 2,
            title: t('filters.delivery.self'),
            count: 856
        }
    ]
    return (
        <FilterCollapse title={t('filters.delivery.title')}>
            <div className={css.delivery}>
                <DeliverySwitch/>
                {storesList.map((item) => (
                    <DeliveryItem item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Delivery;