import React from 'react';
import {useTranslations} from 'next-intl';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import css from "@/components/shared/switch/switch.module.css";
import CustomSwitch from "@/components/shared/custom-switch/custom-switch";

interface props {

}

const DeliverySwitch = (props: props) => {
    const t = useTranslations()
    const pathname = usePathname()
    const {push, query} = useRouter()
    const searchParams = useSearchParams()
    const hasDelivery: string | null = searchParams.get('hasDelivery')
    const changeFilter = searchParams.get('changeFilter')
    const onChange = (checked: boolean) => {
        const queries: ParsedUrlQuery = {
            ...query
        }

        if (checked) {
            queries.hasDelivery = 'true'
        } else {
            delete queries.hasDelivery
            delete queries.delivery
        }
        push({
            pathname,
            query: {
                ...queries,
                // changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            }
        }, undefined, {
            scroll: false
        })
    }
    return (
        <div className={css.wrapper}>
            <p className={css.text}>
                {t('filters.delivery.has')}
            </p>
            <CustomSwitch checked={!!hasDelivery} onChange={onChange}/>
        </div>
    );
};

export default DeliverySwitch;