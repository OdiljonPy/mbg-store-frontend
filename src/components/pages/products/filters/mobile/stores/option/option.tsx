import React, {ChangeEvent} from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {CheckboxChangeEvent} from "antd/lib/checkbox";

interface props {
    item: ICustomCheckbox
}

const Option = ({item}: props) => {
    const {id} = item

    const {watch, setValue} = useFormContext<IFilters>()

    const stores: string[] | undefined = watch('stores')


    const onChange = (e: CheckboxChangeEvent) => {
        const value = e.target.value.toString()
        const checked = e.target.checked
        const storesArr: string[] = stores ? stores : []
        const newStores: string[] = checked ? [...storesArr, value] : storesArr.filter((item) => item !== value)
        setValue('stores', newStores)
    }


    return (
       <CustomCheckbox options={{
           onChange,
           disabled: false,
           checked: !!stores && !!stores?.includes(id.toString())
       }} item={item} hasCount={false}/>
    );
};

export default Option;