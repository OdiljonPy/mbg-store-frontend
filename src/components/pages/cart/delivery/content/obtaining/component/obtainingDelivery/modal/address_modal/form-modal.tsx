import React, {useState} from 'react';
import css from './form-modal.module.css';
import {useTranslations} from 'next-intl';
import {Modal} from "antd";
import {useFieldArray, useForm} from "react-hook-form";
import {IAddressForm} from "@/layout/components/header/top-header/data-types/address-form";
import CloseModal from "@/components/shared/close-modal/close-modal";
import dynamic from "next/dynamic";

import AddAddress
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/button/add_address";
// import AddressInner from "./address-inner"

const AddressInner = dynamic(() => import('./address-inner'),{
    ssr: false
})


interface props {
    open:boolean,
    onClose:() => void
}

const AddressFormModal = ({open,onClose}: props) => {
    const t = useTranslations()
    const methods = useForm<IAddressForm>()




    const close = () => {
        onClose()
        methods.reset()
    }


    const onSubmit = (values: IAddressForm) => {
        console.log(values,"submit fomr")
    }


    return (
        <>
            <Modal
                open={open}
                destroyOnClose={true}
                onCancel={onClose}
                closeIcon={false}
                footer={false}
                width={898}
            >
                <form onSubmit={methods.handleSubmit(onSubmit)} className={css.wrapper}>
                    <CloseModal onClick={close}/>
                    <AddressInner methods={methods}/>
                </form>
            </Modal>
        </>
    );
};

export default AddressFormModal;