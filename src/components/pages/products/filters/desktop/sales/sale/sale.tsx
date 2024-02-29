import React, {ChangeEvent} from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import CustomRadio from "@/components/shared/custom-radio/custom-radio";


interface props {
    item:{
        id:number,
        count:number,
        key:string,
        name:string,
        title:string
    }
}

const Sale = ({item}: props) => {
    const searchParams = useSearchParams()
    const {push, query} = useRouter()
    const pathname = usePathname()
    const sale = searchParams.get('sale')
    const {id} = item

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        const queries = {
            ...query
        }

        if (e.target.checked) {
            queries.sale = item.key
            queries.onSales = 'true'
        } else {
            delete queries.sale
            delete queries.onSales
        }
        push({
            pathname,
            query: {
                ...queries,
                changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            }
        }, undefined, {scroll: false})
    }


    return (
        // <CustomCheckbox options={options} item={item}/>
        <CustomRadio radio={item} options={{
            onChange: onChange,
            disabled: false,
            checked: sale === item.key
        }}>
        </CustomRadio>
    );
};

export default Sale;