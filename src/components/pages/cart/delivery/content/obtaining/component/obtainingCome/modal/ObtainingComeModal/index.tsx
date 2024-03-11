import React from 'react';
import css from "./obtainingComeModal.module.css"
import CloseModal from "@/components/shared/close-modal/close-modal";
import {Modal} from "antd";
import {IAddressFormObtaining} from "@/layout/components/header/top-header/data-types/address-form";
import {useForm} from "react-hook-form";
import dynamic from "next/dynamic";

const AddressInner = dynamic(() => import('./address-inner'), {
    ssr: false
})

interface Props {
    readonly open: boolean,
    onClose: () => void,
    nameMarket: string,
    openAddress: () => void,
}


function ObtainingComeModal({open, onClose, nameMarket, openAddress}: Props) {
    const methods = useForm<IAddressFormObtaining>()

    const onSubmit = (values: IAddressFormObtaining) => {
        console.log(values, "submit form")
    }

    return (
        <Modal
            open={open}
            destroyOnClose={true}
            onCancel={onClose}
            classNames={{content: css.modalContent}}
            closeIcon={false}
            footer={false}
            width={896}
        >
            <form onSubmit={methods.handleSubmit(onSubmit)} className={css.wrapper}>
                <CloseModal onClick={onClose}/>
                <AddressInner  openAddress={openAddress} onClose={onClose} nameMarket={nameMarket} methods={methods}/>
            </form>
        </Modal>
    );
}

export default ObtainingComeModal;