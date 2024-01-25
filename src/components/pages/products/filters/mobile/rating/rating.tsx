import React from 'react';
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import Switch from "@/components/shared/switch/switch";
import {useTranslation} from "next-i18next";
import {useModal} from "@/hooks/use-modal";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";

interface props {

}

const Rating = (props: props) => {
    const {t} = useTranslation()
    const {open, onOpen, onClose} = useModal(true)
    const {watch, setValue} = useFormContext<IFilters>()
    const rating: string | undefined = watch('rating')
    const withFeedback: boolean | undefined = watch('withFeedback')


    const onEnableSales = (checked: boolean) => {
        setValue('withFeedback', checked)
    }
    const onReset = () => {
        setValue('rating', undefined)
        setValue('withFeedback', false)
    }
    return (
        <>
            <div className={css.item}>
                <TopBar onReset={rating?.length || withFeedback ? onReset : undefined} title={t('rating.title')}
                        onOpen={onOpen}/>
                <Switch checked={!!withFeedback} title={t('products.withFeedbacks')} onChange={onEnableSales}/>

            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('rating.title'),
                    onClose,
                    onReset,
                    count: rating ? 1 : undefined
                }}/>
                <div className={css.inner}>
                </div>
            </Drawer>
        </>
    );
};

export default Rating;