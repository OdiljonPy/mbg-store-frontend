import React from 'react';
import {useModal} from "@/hooks/use-modal";
import {useTranslation} from "next-i18next";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {categoriesItems} from "@/components/pages/products/filters/mobile/categories/constants/mock";
import Option from "@/components/pages/products/filters/mobile/categories/option/option";
import {Drawer} from "antd";
import Body from "@/components/pages/products/filters/mobile/stores/body/body";

interface props {

}

const Stores = (props: props) => {
    const {t} = useTranslation()
    const {open, onOpen, onClose} = useModal()
    const {watch, unregister, resetField} = useFormContext<IFilters>()
    const stores: string[] = watch('stores')


    const onReset = () => {
        unregister('stores')
    }

    return (
        <>
            <div>
                <TopBar onReset={stores ? onReset : undefined} title={t('header.stores')} onOpen={onOpen}/>
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

            </Drawer>
        </>
    );
};

export default Stores;