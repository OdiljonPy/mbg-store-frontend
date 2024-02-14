import css from "./delete_modal.module.css"
import {inter} from "@/constants/fonts/fonts";
import {Modal} from "antd";
import CloseModal from "@/components/shared/close-modal/close-modal";
import React from "react";
import SendButton
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/button/send_button";
import {useTranslations} from "next-intl";

interface props{
    open:boolean,
    onClose:()=> void
    deleteAddress:(id:number)=>void
    data:{
        id:number,
        title:string
    }
}
const DeleteModal = ({open,onClose,deleteAddress,data}:props) =>{
    const t = useTranslations()
    const deleteModal = (id:number) =>{
        deleteAddress(id)
        onClose()
    }
    return(
        <div>
            <Modal
                open={open}
                destroyOnClose={true}
                onCancel={onClose}
                closeIcon={false}
                footer={false}
                width={400}
            >
                <div  className={css.modal}>
                    <div className={css.modal_header}>
                        <p className={css.title}>{t('modal.delete_address')}</p>
                        <p className={css.description}>{t('modal.delete_desc')} <span>{data?.title}</span>?</p>
                    </div>
                    <div className={css.modal_footer}>
                        <SendButton title={'modal.no'} outline={true} onClick={onClose}/>
                        <SendButton title={'modal.yes'} onClick={()=>deleteModal(data.id)}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteModal