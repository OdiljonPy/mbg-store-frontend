import React, {useState} from 'react';
import css from './form-modal.module.css';
import {useTranslations} from 'next-intl';
import {Modal} from "antd";
import {useForm} from "react-hook-form";
import {IAddressForm} from "@/layout/components/header/top-header/data-types/address-form";
import CloseModal from "@/components/shared/close-modal/close-modal";
import dynamic from "next/dynamic";
import PlusSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/plusSVG";
// import AddressInner from "./address-inner"

const AddressInner = dynamic(() => import('./address-inner'),{
    ssr: false
})


interface props {

}

const AddressFormModal = (props: props) => {
    const t = useTranslations()


    const [open, setOpen] = useState<boolean>(false)




    const methods = useForm<IAddressForm>()

    const onOpen = () => {
        document.body.style.overflow = 'hidden'
        setOpen(true)
    }


    const onClose = () => {
        document.body.style.overflow = 'visible'
        setOpen(false)
        methods.reset()
    }

    const onSubmit = (values: IAddressForm) => {

    }

    return (
        <>
            <button onClick={onOpen}  className={`${css.submitBtn}`}>
                <PlusSVG/>
                <span className={css.text}>
                    {t('address.add')}
                </span>
            </button>
            <Modal
                open={open}
                destroyOnClose={true}
                onCancel={onClose}
                closeIcon={false}
                footer={false}
                width={898}
            >
                <form onSubmit={methods.handleSubmit(onSubmit)} className={css.wrapper}>
                    <CloseModal onClick={onClose}/>
                    <AddressInner methods={methods}/>
                </form>
            </Modal>
        </>
    );
};

export default AddressFormModal;