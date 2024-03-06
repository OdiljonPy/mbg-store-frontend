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

interface Props {
    open: boolean,
    setOpen: (value: boolean) => void,
    setSignUpOpen: (value: boolean) => void
}

const LoginModal = ({open, setOpen, setSignUpOpen}: Props) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordValidations, setPasswordValidations] = useState([
        {
            title: "не менее 8 символов",
            fullFilled: false
        },
        {
            title: "минимум 1 буква",
            fullFilled: false
        },
        {
            title: "минимум 1 цифра",
            fullFilled: false
        }

    ])

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
            .then(() => {
                setOpen(false)
            })
            .catch(() => {
            })
    }

    const handleNavigate = () => {
        setOpen(false);
        setSignUpOpen(true)
    }


    const handleSetPassword = (value: string) => {
        if (value.length > 8) {
            const fakeData = [...passwordValidations]
            fakeData[0].fullFilled = true
            setPasswordValidations(fakeData)
        }
        setPassword(value)
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
                <FormInput setValue={handleSetPassword} name={"password"} label={"Пароль"} type={"password"}
                           placeholder="Введите пароль"
                           id="password"/>

                <button disabled={!(phoneNumber && password)} className={css.btn} type={"submit"}>Войти</button>
                <p className={css.signup}>Нет аккаунта? <button onClick={handleNavigate}>Создать аккаунт</button></p>
            </form>
        </Modal>
    );
}

export default LoginModal;