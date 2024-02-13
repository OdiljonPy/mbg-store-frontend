import React from 'react';
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    item: ICustomCheckbox
}

const Option = ({item}: props) => {
    const {id} = item

    const {watch, setValue} = useFormContext<IFilters>()

    const delivery: string[] | undefined = watch('delivery')



    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value.toString()
        const checked = e.target.checked
        const salesArr: string[] = delivery ? delivery : []
        const newStores: string[] = checked ? [...salesArr, value] : salesArr.filter((item) => item !== value)
        setValue('delivery', newStores)
        setValue('hasDelivery', true)
    }


    return (
        <CustomCheckbox options={{
            onChange,
            disabled: false,
            checked:!!delivery && !!delivery?.includes(id.toString())
        }} item={item}/>
    );
};

export default Option;