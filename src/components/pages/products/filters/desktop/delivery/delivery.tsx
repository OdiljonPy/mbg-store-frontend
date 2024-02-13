import React from 'react';
import css from './delivery.module.css'
import FilterCollapse from "@/components/pages/products/filters/desktop/filter-collapse/filter-collapse";
import {useTranslations} from 'next-intl';
import DeliverySwitch from "@/components/pages/products/filters/desktop/delivery/delivery-switch/delivery-switch";
import DeliveryItem from "@/components/pages/products/filters/desktop/delivery/delivery/delivery";
import {useDeliveryOptions} from "@/components/pages/products/filters/mobile/hooks/use-delivery-options";

interface props {

}


const Delivery = (props: props) => {
    const t = useTranslations()
   const deliveryOptions = useDeliveryOptions()
    return (
        <FilterCollapse title={t('filters.delivery.title')}>
            <div className={css.delivery}>
                <DeliverySwitch/>
                {deliveryOptions.map((item) => (
                    <DeliveryItem item={item} key={item.id}/>
                ))}
            </div>
        </FilterCollapse>
    );
};

export default Delivery;