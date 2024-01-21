import React from 'react';
import FilterCollapse from "@/components/pages/products/filters/filter-collapse/filter-collapse";
import {useTranslation} from "next-i18next";
import css from './stores.module.css'
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import Store from "@/components/pages/products/filters/stores/store/store";

interface props {

}


const storesList: ICustomCheckbox[] = [
    {
        id: 1,
        title: 'Зеленая лавка',
        count: 2132
    },
    {
        id: 2,
        title: 'Солнечные поля',
        count: 856
    },
    {
        id: 3,
        title: 'Гурманский уголок',
        count: 123
    },
    {
        id: 4,
        title: 'Фермерская базарка',
        count: 345
    }
]

const Stores = (props: props) => {
    const {t} = useTranslation()

    return (
        <FilterCollapse title={t('header.stores')}>
            <div className={css.stores}>
                {storesList.map((item) => (
                    <Store item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Stores;