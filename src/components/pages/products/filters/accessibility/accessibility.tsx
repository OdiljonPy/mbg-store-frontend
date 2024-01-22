import React from 'react';
import css from "@/components/pages/products/filters/delivery/delivery.module.css";
import {useTranslation} from "next-i18next";
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import Item from "@/components/pages/products/filters/accessibility/item/item";

interface props {

}


const Accessibility = (props: props) => {
    const {t} = useTranslation()
    const storesList: ICustomCheckbox[] = [
        {
            id: 1,
            title: 'товары в наличии',
            count: 150

        },
        {
            id: 2,
            title: '24/7',
            count: 15
        }
    ]

    return (
        <FilterCollapse title={t('filters.accessibility.title')}>
            <div className={css.delivery}>
                {storesList.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Accessibility;