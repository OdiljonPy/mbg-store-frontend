import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {useDeliveryOptions} from "@/components/pages/products/filters/mobile/hooks/use-delivery-options";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";

interface props {

}

const Body = (props: props) => {
    const deliveryOptions = useDeliveryOptions()
    return (
        <div className={css.wrapper}>
            {deliveryOptions.map((item) => (
                <CustomCheckbox boolName={'hasDelivery'} name={'delivery'} item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Body;