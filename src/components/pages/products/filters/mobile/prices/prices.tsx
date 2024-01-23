import React from 'react';
import {useModal} from "@/hooks/use-modal";
import css from "@/components/pages/products/filters/mobile/categories/categories.module.css";
import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import Body from "@/components/pages/products/filters/mobile/categories/body/body";
import {useTranslation} from "next-i18next";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import {Drawer} from "antd";

interface props {

}

const Prices = (props: props) => {
    const {open, onOpen, onClose} = useModal()
    const {t} = useTranslation()
    const onReset = () => {

    }
    return (
        <>
            <div className={css.btn}>
                <TopBar hideIcon title={t('price.title')} onOpen={onOpen}/>

            </div>
            <Drawer classNames={{
                body: 'custom-body'
            }} open={open} closeIcon={false} placement={'bottom'} height={'100%'} onClose={onClose}>
                <DrawerHeader options={{
                    title: t('categories.title'),
                    onClose,
                    onReset
                }}/>
            </Drawer>
        </>
    );
};

export default Prices;