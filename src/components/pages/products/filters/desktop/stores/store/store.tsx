import React from 'react';
import css from './store.module.css'
import {ICustomCheckbox, ISlideOptions} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import {usePathname, useSearchParams} from "next/navigation";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import {useRouter} from "next/router";

interface props {
    item: ICustomCheckbox
}

const Store = ({item}: props) => {
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const pathname = usePathname()
    const stores: string[] | undefined = searchParams.get('stores')?.split(',')
    const {id, count} = item
    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value
        const queries = {
            ...query,

        }

        if (e.target.checked) {
            queries.stores = stores ? stores + ',' + value : value
        } else {
            if (stores?.length === 1) {
                delete queries.stores
            } else {
                queries.stores = stores?.filter((item) => item !== value.toString()).join(',')
            }
        }

        push({
            pathname,
            query: {
                ...queries,
                changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            },
        }, undefined, {scroll: false})
    }


    const options: ISlideOptions = {
        disabled: false,
        checked: !!stores?.includes(id.toString()),
        onChange: onChange
    }

    return (
        <CustomCheckbox options={options} item={item}/>

    );
};

export default Store;