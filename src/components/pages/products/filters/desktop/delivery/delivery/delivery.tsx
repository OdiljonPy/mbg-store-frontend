import React from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import {ICustomCheckbox, ISlideOptions} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";

interface props {
item: ICustomCheckbox
}

const DeliveryItem = ({item}: props) => {
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const pathname = usePathname()
    const delivery: string[] | undefined = searchParams.get('delivery')?.split(',')
    const {id} = item
    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value
        const queries = {
            ...query
        }


        if (e.target.checked) {
            queries.delivery = delivery ? delivery + ',' + value : value
        } else {
            if (delivery?.length === 1) {
                delete queries.delivery
            } else {
                queries.delivery = delivery?.filter((item) => item !== value.toString()).join(',')
            }
        }

        push({
            pathname,
            query: queries
        }, undefined, {scroll: false})
    }


    const options: ISlideOptions = {
        disabled: false,
        checked: !!delivery?.includes(id.toString()),
        onChange: onChange
    }

    return (
        <CustomCheckbox options={options} item={item}/>

    );
};

export default DeliveryItem;