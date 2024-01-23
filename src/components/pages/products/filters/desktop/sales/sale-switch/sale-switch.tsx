import React, {ChangeEvent} from 'react';
import css from './sale-switch.module.css'
import {useTranslation} from "next-i18next";
import {ConfigProvider, Switch} from "antd";
import {usePathname, useSearchParams} from "next/navigation";
import {SwitchChangeEventHandler} from "antd/lib/switch";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import CustomSwitch from "@/components/shared/custom-switch/custom-switch";

interface props {

}

const SaleSwitch = (props: props) => {
    const {t} = useTranslation()
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
            query: queries
        }, undefined, {
            scroll: false
        })
    }
    return (
        <div className={css.wrapper}>
            <p className={css.text}>
                {t('sales.title')}
            </p>
            <CustomSwitch checked={!!onSales} onChange={onChange}/>
        </div>
    );
};

export default SaleSwitch;