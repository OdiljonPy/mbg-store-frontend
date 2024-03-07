import React, {useEffect, useState} from 'react';
import {Modal} from "antd";
import CloseModal from "@/components/shared/close-modal/close-modal";
import css from "./login.module.css"
import FormInput from "@/components/shared/form-input/form-input";
import ModalTitle from "@/components/pages/home/login/components/modal-title/modal-title";
import {loginUser} from "@/slices/auth/auth";
import {clearMessage} from "@/slices/message/message";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store";
import {Simulate} from "react-dom/test-utils";
import FormError from "@/components/shared/form-error/form-error";
import error = Simulate.error;

interface Props {
    open: boolean,
    setOpen: (value: boolean) => void,
    setSignUpOpen: (value: boolean) => void
}

interface IState {
    message: string
}

const LoginModal = ({open, setOpen, setSignUpOpen}: Props) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const message = useSelector((state: IState) => state.message);

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload = {
            phone_number: phoneNumber,
            password: password
        }

        dispatch(loginUser(payload))
            .unwrap()
            .then((res) => {
                if (res?.ok) {
                    setOpen(false)
                }
            })
            .catch((err) => {
                console.log(error)
            })
    }

    const handleNavigate = () => {
        setOpen(false);
        setSignUpOpen(true)
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
            <ModalTitle>Вход в аккаунт</ModalTitle>
            <form onSubmit={onSubmit} className={css.form}>
                <FormInput setValue={setPhoneNumber} name={"phone"} label={"Номер телефона"} type={"phone"}
                           id={"phone"}/>
                <FormInput setValue={setPassword} name={"password"} label={"Пароль"} type={"password"}
                           placeholder="Введите пароль"
                           id="password"/>
                <FormError error={message !== "" ? "Пользователь не найден!" : ""}/>
                <button disabled={!(phoneNumber.length === 13 && password)} className={css.btn} type={"submit"}>Войти
                </button>
                <p className={css.signup}>Нет аккаунта? <a onClick={handleNavigate}>Создать аккаунт</a></p>
            </form>
        </Modal>
    );
}

export default LoginModal;