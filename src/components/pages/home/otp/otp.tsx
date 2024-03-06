import React, {useState} from 'react';
import css from "./otp.module.css";
import CloseModal from "@/components/shared/close-modal/close-modal";
import ModalTitle from "@/components/pages/home/login/components/modal-title/modal-title";
import {Modal} from "antd";
import OtpInput from 'react-otp-input';
import Button from "@/components/shared/button/button";

interface Props {
    readonly open: boolean,
    setOpen: (value: boolean) => void,
    phoneNumber: string
}

const otpContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "26px"
}

const otpInputStyle = {
    padding: "16px 20px",
    border: "1.6px solid #E9E9E9",
    borderRadius: "12px",
    width: "56px",
    height: "60px",
    fontSize: "24px",
    color: "#232323",
}

function Otp({open, setOpen, phoneNumber}: Props) {
    const [otp, setOtp] = useState<string>("")

    const handleClose = () => {
        setOpen(false)
    }

    function formatPhoneNumber(phoneNumber: string) {
        phoneNumber = String(phoneNumber)
        return `${phoneNumber.slice(0, 6)} *** ** ${phoneNumber.slice(11)}`;
    }

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    console.log(otp.length === 5)

    return (
        <Modal
            centered
            className={css.modal}
            closeIcon={<CloseModal onClick={handleClose}/>}
            destroyOnClose={true}
            classNames={{content: css.modalContent}}
            wrapClassName={css.wrapper}
            footer={false}
            open={open}
            onCancel={handleClose}
        >
            <ModalTitle>Введите код</ModalTitle>
            <p className={css.number}>Код отправлен на номер <span>{formattedPhoneNumber}</span></p>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={5}
                containerStyle={otpContainerStyle}
                inputType={"number"}
                placeholder={"00000"}
                inputStyle={otpInputStyle}
                renderInput={(props) => <input  {...props} />}
            />
            <div className={css.buttons}>
                <Button type="outline">Назад</Button>
                <Button disabled={!(otp.length === 5)}>Подтвердить</Button>
            </div>
        </Modal>
    );
}

export default Otp;