import css from "./successful-modal.module.css"
import CloseModal from "@/components/shared/close-modal/close-modal";
import ModalInfo from "@/components/pages/feedback/components/successful-modal/components/modal-info";
import {Modal} from "antd";


interface props {
    readonly open: boolean,
    onClose: () => void,
}
const SuccessfulModal = ({onClose,open}:props) =>{
    return(
        <Modal
            open={open}
            destroyOnClose={true}
            onCancel={onClose}
            classNames={{content: css.modalContent}}
            closeIcon={false}
            footer={false}
        >
            <div className={css.wrapper}>
                <CloseModal onClick={onClose}/>
                <ModalInfo/>
            </div>
        </Modal>
    )
}

export default SuccessfulModal