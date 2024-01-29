import React from 'react';
import {useModal} from "@/hooks/use-modal";
import {useTranslations} from 'next-intl';
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";
import Body from "@/components/pages/products/filters/mobile/stores/body/body";
import {storesList} from "@/constants/stores/stores";
import Option from "@/components/pages/products/filters/mobile/stores/option/option";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";


interface props {

}

const Stores = (props: props) => {
    const t = useTranslations()
    const {open, onOpen, onClose} = useModal(true)
    const {watch, setValue} = useFormContext<IFilters>()
    const stores: string[] | undefined = watch('stores')


    const onReset = () => {
        setValue('stores', undefined)
    }


    return (
        <>
            <div className={css.item}>
                <TopBar onReset={stores?.length ? onReset : undefined} title={t('header.stores')} onOpen={onOpen}/>
                <Body/>
            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('header.stores'),
                    onClose,
                    onReset,
                    count: stores?.length ?? 0
                }}/>
                <div className={css.inner}>
                    {storesList.map((store) => (
                        <Option item={store} key={store.id}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Stores;