import React from 'react';
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import Switch from "@/components/shared/switch/switch";
import Body from "@/components/pages/products/filters/mobile/delivery/body/body";
import {useTranslation} from "next-i18next";
import {useModal} from "@/hooks/use-modal";
import {useSalesList} from "@/components/pages/products/filters/mobile/hooks/sales-list";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import {useDeliveryOptions} from "@/components/pages/products/filters/mobile/hooks/use-delivery-options";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";
import Option from "@/components/pages/products/filters/mobile/delivery/option/option";

interface props {

}

const Delivery = (props: props) => {
    const {t} = useTranslation()
    const {open, onOpen, onClose} = useModal(true)
    const deliveryOptions = useDeliveryOptions()
    const {watch, setValue} = useFormContext<IFilters>()
    const delivery: string[] | undefined = watch('delivery')
    const hasDelivery: boolean | undefined = watch('hasDelivery')



    const onEnableSales = (checked: boolean) => {
        setValue('hasDelivery', checked)
    }
    const onReset = () => {
        setValue('delivery', undefined)
        setValue('hasDelivery', false)
    }

    return (
        <>
            <div className={css.item}>
                <TopBar onReset={delivery?.length || hasDelivery ? onReset : undefined}
                        title={t('filters.delivery.title')}
                        onOpen={onOpen}/>
                <Switch checked={!!hasDelivery} title={t('filters.delivery.has')} onChange={onEnableSales}/>
                <Body/>
            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('sales.sale'),
                    onClose,
                    onReset,
                    count: delivery?.length ?? 0
                }}/>
                <div className={css.inner}>
                    <Switch checked={!!hasDelivery} title={t('filters.delivery.has')} onChange={onEnableSales}/>
                    {deliveryOptions.map((item) => (
                        <Option item={item} key={item.id}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Delivery;