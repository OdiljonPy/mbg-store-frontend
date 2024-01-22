import React from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import {ICustomCheckbox, ISlideOptions} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    item: ICustomCheckbox
}

const Sale = ({item}: props) => {
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const pathname = usePathname()
    const onSales: string | null = searchParams.get('onSales')
    const sales: string[] | undefined = searchParams.get('sales')?.split(',')
    const {id} = item

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
        disabled: !onSales,
        checked: !!sales?.includes(id.toString()),
        onChange: onChange
    }

    return (
        <CustomCheckbox options={options} item={item}/>
    );
};

export default Sale;