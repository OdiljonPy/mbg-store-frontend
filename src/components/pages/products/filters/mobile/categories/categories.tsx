import React, {useState} from 'react';
import {Drawer} from "antd";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {useTranslation} from "next-i18next";
import css from './categories.module.css'
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import Body from "@/components/pages/products/filters/mobile/categories/body/body";
import {categoriesItems} from "@/components/pages/products/filters/mobile/categories/constants/mock";
import Option from "@/components/pages/products/filters/mobile/categories/option/option";
import {useModal} from "@/hooks/use-modal";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";



const Categories = () => {
    const {t} = useTranslation()
    const {open, onClose, onOpen} = useModal()
    const { unregister, watch} = useFormContext<IFilters>()

    const category = watch('category')
    const onReset = () => {
        unregister('category')
        onClose()
    }
    return (
        <>
            <div className={css.btn}>
                <TopBar title={t('categories.title')} onOpen={onOpen}/>
                {!open && <Body/>}
            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('categories.title'),
                    onClose,
                    onReset,
                    count: category ? 1 : undefined
                }}/>
                {categoriesItems.map((category) => (
                    <Option onClose={onClose} item={category} key={category.id}/>
                ))}
            </Drawer>
        </>
    );
};

export default Categories;