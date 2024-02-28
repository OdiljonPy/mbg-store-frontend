import React from 'react';
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import css from "@/components/pages/products/filters/desktop/stores/stores.module.css";
import {useTranslations} from 'next-intl';
import Sale from "@/components/pages/products/filters/desktop/sales/sale/sale";
import Switch from "@/components/shared/switch/switch";
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

interface props {

}



const Sales = (props: props) => {

    const t = useTranslations()
    const pathname = usePathname()
    const {push, query} = useRouter()
    const searchParams = useSearchParams()
    const onSales: string | null = searchParams.get('onSales')

    const onChange = (checked: boolean) => {
        const queries: ParsedUrlQuery = {
            ...query
        }
        if (checked) {
            queries.onSales = 'true'
        } else {
            delete queries.onSales
            delete queries.sales
        }
        push({
            pathname,
            query: {
                ...queries,
                changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            }
        }, undefined, {
            scroll: false
        })
    }

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
                <Switch title={t('sales.title')} checked={!!onSales} onChange={onChange}/>
                {storesList.map((item) => (
                    <Sale item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Sales;