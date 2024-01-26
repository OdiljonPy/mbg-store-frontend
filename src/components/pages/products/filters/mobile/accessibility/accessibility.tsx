import React from 'react';
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import {useTranslation} from "next-i18next";
import {useModal} from "@/hooks/use-modal";
import {useFormContext} from "react-hook-form";
import {IFilters} from "@/components/pages/products/filters/mobile/mobile-filters/data-types";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";
import Body from "@/components/pages/products/filters/mobile/accessibility/body/body";
import {accessibilityList} from "@/components/pages/products/filters/desktop/accessibility/accessibility";
import Option from "@/components/pages/products/filters/mobile/accessibility/option/option";

interface props {

}

const Accessibility = (props: props) => {
    const {t} = useTranslation()
    const {watch, unregister} = useFormContext<IFilters>()
    const accessibility = watch('accessibility')
    const {
        open,
        onClose,
        onOpen
    } = useModal(true)

    const onReset = () => {
        unregister('accessibility')
    }
    return (
        <>
            <div className={css.item}>
                <TopBar onReset={accessibility?.length ? onReset : undefined}
                        title={t('filters.accessibility.title')}
                        onOpen={onOpen}/>
                <Body/>
            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('filters.accessibility.title'),
                    onClose,
                    onReset,
                    count: accessibility?.length ?? 0
                }}/>
                <div className={css.inner}>
                    {accessibilityList.map((item) => (
                        <Option item={item} key={item.id}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Accessibility;