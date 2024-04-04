import React from 'react';
import {ICustomCheckbox, ISlideOptions} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";

interface props {
    item: ICustomCheckbox
}

const Item = ({item}: props) => {
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const pathname = usePathname()
    const accessibility: string[] | undefined = searchParams.get('accessibility')?.split(',')
    const {id} = item
    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value
        const queries = {
            ...query
        }


        if (e.target.checked) {
            queries.accessibility = accessibility ? accessibility + ',' + value : value
        } else {
            if (accessibility?.length === 1) {
                delete queries.accessibility
            } else {
                queries.accessibility = accessibility?.filter((item) => item !== value.toString()).join(',')
            }
        }

        push({
            pathname,
            query: {
                ...queries,
                changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            }
        }, undefined, {scroll: false})
    }


    const options: ISlideOptions = {
        disabled: false,
        checked: !!accessibility?.includes(id.toString()),
        onChange: onChange
    }

    return (
        <CustomCheckbox options={options} item={item} hasCount={false}/>

    );
};

export default Item;