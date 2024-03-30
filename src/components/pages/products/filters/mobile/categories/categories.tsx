import React from 'react';
import {Drawer} from "antd";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {useTranslations} from 'next-intl';
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import Body from "@/components/pages/products/filters/mobile/categories/body/body";
import {categoriesItems} from "@/components/pages/products/filters/mobile/categories/constants/mock";
import Option from "@/components/pages/products/filters/mobile/categories/option/option";
import {useModal} from "@/hooks/use-modal";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import {ICategory} from "@/data-types/categories/categories";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface props{

}

const Categories = ({}:props) => {
    const {categories,loading,error} = useSelector((state:RootState) => state.category)
    const t = useTranslations()
    const {open, onClose, onOpen} = useModal(true)
    const {unregister, watch} = useFormContext<IFilters>()

    const category = watch('category')
    const onReset = () => {
        unregister('category')
        onClose()
    }
    return (
        <>
            <div className={css.item}>
                <TopBar onReset={category ? onReset : undefined} title={t('categories.title')} onOpen={onOpen}/>
                <Body categories={categories} loading={loading}/>
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
                <div className={css.inner}>
                    {loading ? '...loading' : categories.map((category) => (
                        <Option onClose={onClose} item={category} key={category.id}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Categories;