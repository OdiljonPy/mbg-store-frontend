import React, {useEffect, useState} from 'react';
import css from "./otp.module.css";
import CloseModal from "@/components/shared/close-modal/close-modal";
import ModalTitle from "@/components/pages/home/login/components/modal-title/modal-title";
import {Modal} from "antd";
import OtpInput from 'react-otp-input';
import Button from "@/components/shared/button/button";
import FormError from "@/components/shared/form-error/form-error";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store";
import Timer from "@/components/pages/home/otp/component/timer/timer";
import Attempts from "@/components/pages/home/otp/component/attempts/attempts";
import {verify, verifyResend} from "@/slices/auth/auth";
import {clearMessage} from "@/slices/message/message";
import {setOtpKey} from "@/slices/otpKey/otpKey";

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

const otpErrorInputStyle = {
    padding: "16px 20px",
    border: "1.6px solid #FF6C6C",
    borderRadius: "12px",
    width: "56px",
    height: "60px",
    fontSize: "24px",
    color: "#232323",
}

interface IState {
    message: string,
    otpKey: string
}


function Otp({open, setOpen, phoneNumber}: Props) {
    const [otp, setOtp] = useState<string>("")
    const [resendTime, setResendTime] = useState<number>(59)
    const message = useSelector((state: IState) => state.message)
    const otpKey = useSelector((state: IState) => state.otpKey)
    const [timerStarted, setTimerStarted] = useState<boolean>(true)
    const dispatch = useDispatch<AppDispatch>()
    const [attemptCount, setAttemptCount] = useState<number>(2)

    const handleClose = () => {
        setOpen(false)
        setResendTime(59)
        setTimerStarted(false)
        setOtp("")
    }

    useEffect(() => {
        setTimerStarted(true)
        setResendTime(59)
    }, [])


    function formatPhoneNumber(phoneNumber: string) {
        phoneNumber = String(phoneNumber)
        return `${phoneNumber.slice(0, 6)} *** ** ${phoneNumber.slice(11)}`;
    }

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    const handleConfirm = () => {
        const payload = {
            otp_key: otpKey,
            otp_code: otp
        }

        dispatch(verify(payload))
            .unwrap()
            .then((res) => {
                if (res.ok) {
                    setOpen(false)
                }
            })
            .catch(() => {

            })
            .finally(() => {

            })
    }


    const handleResend = () => {
        if (attemptCount === 0) {
            return
        }
        setTimerStarted(true)
        setResendTime(59)
        setOtp("")
        dispatch(clearMessage())

        const payload = {
            otp_key: otpKey,
        }

        dispatch(verifyResend(payload))
            .unwrap()
            .then((res) => {
                setAttemptCount(prevState => prevState - 1)
                dispatch(setOtpKey(res.result.otp_key))
            })
            .catch(() => {

            })
            .finally(() => {

            })

    }

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
                onChange={(value) => {
                    setOtp(value)
                    dispatch(clearMessage())
                }}
                numInputs={5}
                containerStyle={otpContainerStyle}
                inputType={"number"}
                placeholder={"00000"}
                inputStyle={message !== "" ? otpErrorInputStyle : otpInputStyle}
                renderInput={(props) => <input  {...props} />}
            />
            <FormError style={{textAlign: "left", fontSize: "14px", lineHeight: "18px", height: "18px"}}
                       error={message !== "" ? "Недействительный код" : ""}/>
            <div className={css.buttons}>
                <Button onClick={handleClose} type="outline">Назад</Button>
                <Button onClick={handleConfirm} disabled={!(otp.length === 5) || message !== ""}>Подтвердить</Button>
            </div>
            {resendTime === 0 ?
                <Attempts attemptCount={attemptCount} onClick={handleResend}/> :
                <Timer setResendTime={setResendTime} resendTime={resendTime} onStart={timerStarted}/>
            }
        </Modal>
    );
}

export default Otp;