import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {useSalesList} from "@/components/pages/products/filters/mobile/hooks/sales-list";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";

interface props {

}

const Body = (props: props) => {
    const salesList = useSalesList()
    return (
        <div className={css.wrapper}>
            {salesList.map((item) => (
                <CustomCheckbox boolName={'onSales'} name={'sales'} item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Body;