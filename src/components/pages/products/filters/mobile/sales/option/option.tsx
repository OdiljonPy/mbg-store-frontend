import React from 'react';
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";

interface props {
    item: ICustomCheckbox
    onClose : () => void
}

const Option = ({item,onClose}: props) => {
    const {id} = item

    const {watch, setValue} = useFormContext<IFilters>()

    const sales: string | undefined = watch('sales')


    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value.toString()
        const checked = e.target.checked
        // const salesArr: string[] = sales ? sales : []
        // const newStores: string[] = checked ? [...salesArr, value] : salesArr.filter((item) => item !== value)
        setValue('sales', value)
        setValue('onSales', false)
        onClose()
    }


    return (
        <CustomCheckbox options={{
            onChange,
            disabled: false,
            checked: !!sales && !!sales?.includes(id.toString())
        }} item={item}/>
    );
};

export default Option;