import React from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import css from "@/components/pages/products/filters/stores/store/store.module.css";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import {priceFormatter} from "@/utils/price-formatter/price-formatter";
import {ICustomCheckbox, ISlideOptions} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    item: ICustomCheckbox
}

const Sale = ({item}: props) => {
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const pathname = usePathname()
    const sales: string[] | undefined = searchParams.get('sales')?.split(',')
    const {id, count} = item
    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value
        const queries = {
            ...query
        }


        if (e.target.checked) {
            queries.sales = sales ? sales + ',' + value : value
        } else {
            if (sales?.length === 1) {
                delete queries.sales
            } else {
                queries.sales = sales?.filter((item) => item !== value.toString()).join(',')
            }
        }

        push({
            pathname,
            query: queries
        }, undefined, {scroll: false})
    }

    const options: ISlideOptions = {
        disabled: false,
        checked: !!sales?.includes(id.toString()),
        onChange: onChange
    }

    return (
        <CustomCheckbox options={options} item={item}/>
    );
};

export default Sale;