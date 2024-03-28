import css from "./cancel-modal.module.css"
import {Modal} from "antd";
import React from "react";
import SendButton
    from "@/components/pages/cart/common/button/send_button";
import {useTranslations} from "next-intl";

interface props{
    open:boolean,
    onClose:(status:'close'|'cancel')=> void
    title:string
}
const CancelModal = ({open,onClose,title}:props) =>{
    const t = useTranslations()

    return(
        <div>
            <Modal
                open={open}
                destroyOnClose={true}
                onCancel={() => onClose("close")}
                closeIcon={false}
                footer={false}
                width={400}
            >
                <div  className={css.modal}>
                    <div className={css.modal_header}>
                        <p className={css.title}>{t('order_placed.cancel_order')}</p>
                        <p className={css.description}>{t('order_placed.agree_cancel_text')} <span>{title}</span>?</p>
                    </div>
                    <div className={css.modal_footer}>
                        <SendButton title={'modal.no'} outline={true} onClick={() => onClose('close')}/>
                        <SendButton title={'modal.yes'} onClick={()=>onClose('cancel')}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CancelModal