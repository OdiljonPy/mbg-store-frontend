import React from 'react';
import {useTranslation} from "next-i18next";
import {useModal} from "@/hooks/use-modal";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";
import Switch from "@/components/shared/switch/switch";
import Body from "@/components/pages/products/filters/mobile/sales/body/body";
import {useSalesList} from "@/components/pages/products/filters/mobile/hooks/sales-list";
import Option from "@/components/pages/products/filters/mobile/sales/option/option";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";

interface props {

}

const Sales = (props: props) => {
    const {t} = useTranslation()
    const {open, onOpen, onClose} = useModal(true)
    const salesList = useSalesList()
    const {watch, setValue} = useFormContext<IFilters>()
    const sales: string[] | undefined = watch('sales')
    const onSales: boolean | undefined = watch('onSales')


    const onEnableSales = (checked: boolean) => {
        setValue('onSales', checked)
    }
    const onReset = () => {
        setValue('stores', undefined)
        setValue('onSales', false)
    }
    return (
        <>
            <div className={css.item}>
                <TopBar onReset={sales?.length || onSales ? onReset : undefined} title={t('sales.sale')}
                        onOpen={onOpen}/>
                <Switch  checked={!!onSales} title={t('sales.title')} onChange={onEnableSales}/>
                <Body/>
            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('sales.sale'),
                    onClose,
                    onReset,
                    count: sales?.length ?? 0
                }}/>
                <div className={css.inner}>
                    <Switch title={t('sales.title')} checked={!!onSales} onChange={onEnableSales}/>
                    {salesList.map((item) => (
                        <Option item={item} key={item.id}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Sales;