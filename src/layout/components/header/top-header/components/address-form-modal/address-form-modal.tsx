import React, {useState} from 'react';
import css from './address-form-modal.module.css'
import {useTranslations} from 'next-intl';
import {Modal} from "antd";
import {useForm} from "react-hook-form";
import {IAddressForm} from "@/layout/components/header/top-header/data-types/address-form";
import CloseModal from "@/components/shared/close-modal/close-modal";
import dynamic from "next/dynamic";


const AddressInner = dynamic(() => import('@/layout/components/header/top-header/components/address-inner/address-inner'),{
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
            <button onClick={onOpen} type={'button'} className={`${css.btn}`}>
                <svg className={css.icon} width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.48599 2.24431C3.14984 3.1371 2.10844 4.40605 1.49348 5.8907C0.878517 7.37535 0.717615 9.00901 1.03112 10.5851C1.34462 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64025 15.875 6.31104 15.4718 5.18045 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52237 6.32513 3.17715 5.10013 4.13864 4.13864C5.10013 3.17716 6.32513 2.52237 7.65875 2.2571C8.99237 1.99183 10.3747 2.12798 11.6309 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM12.75 9C12.75 9.16576 12.6842 9.32473 12.5669 9.44194C12.4497 9.55915 12.2908 9.625 12.125 9.625H9.625V12.125C9.625 12.2908 9.55915 12.4497 9.44194 12.5669C9.32473 12.6842 9.16576 12.75 9 12.75C8.83424 12.75 8.67527 12.6842 8.55806 12.5669C8.44085 12.4497 8.375 12.2908 8.375 12.125V9.625H5.875C5.70924 9.625 5.55027 9.55915 5.43306 9.44194C5.31585 9.32473 5.25 9.16576 5.25 9C5.25 8.83424 5.31585 8.67527 5.43306 8.55806C5.55027 8.44085 5.70924 8.375 5.875 8.375H8.375V5.875C8.375 5.70924 8.44085 5.55027 8.55806 5.43306C8.67527 5.31585 8.83424 5.25 9 5.25C9.16576 5.25 9.32473 5.31585 9.44194 5.43306C9.55915 5.55027 9.625 5.70924 9.625 5.875V8.375H12.125C12.2908 8.375 12.4497 8.44085 12.5669 8.55806C12.6842 8.67527 12.75 8.83424 12.75 9Z"
                        fill="#39B969"/>
                </svg>
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