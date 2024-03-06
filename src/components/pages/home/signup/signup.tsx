import React, {useState} from 'react';
import {Modal} from "antd";
import CloseModal from "@/components/shared/close-modal/close-modal";
import css from "./signup.module.css"
import FormInput from "@/components/shared/form-input/form-input";
import ModalTitle from "@/components/pages/home/login/components/modal-title/modal-title";
import Offer from "@/components/pages/home/signup/components/offer/offer";
import {useDispatch} from "react-redux";
import {signUpUser} from "@/slices/auth/auth";
import {AppDispatch} from "@/store";

interface Props {
    readonly open: boolean,
    setOpen: (value: boolean) => void,
    setLoginOpen: (value: boolean) => void
}


const SignUpModal = ({open, setOpen, setLoginOpen}: Props) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>()

    const [offer, setOffer] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }


    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload = {
            phone_number: phoneNumber,
            password: password
        }

        dispatch(signUpUser(payload))
            .unwrap()
            .then((data) => {
                setOpen(false)
            })
            .catch(() => {
            })

    }
    const handleNavigate = () => {
        setOpen(false);
        setLoginOpen(true)
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
            <ModalTitle>Создание аккаунта</ModalTitle>
            <form onSubmit={onSubmit} className={css.form}>
                <FormInput setValue={setPhoneNumber} name={"phone"} label={"Номер телефона"} type={"phone"}
                           id={"phone-input"}/>
                <FormInput setValue={setPassword} name={"password"} label={"Пароль"} type={"password"}
                           placeholder="Введите пароль"
                           id="password"/>

                <Offer offer={offer} setOffer={setOffer}/>

                <button disabled={(!(offer && phoneNumber && password))} className={css.btn}
                        type={"submit"}>Создать аккаунт
                </button>
                <p className={css.signup}>Есть аккаунт? <button onClick={handleNavigate}>Войти в аккаунт</button></p>
            </form>
        </Modal>
    );
}

export default SignUpModal;