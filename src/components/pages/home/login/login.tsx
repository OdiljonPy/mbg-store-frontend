import React, {useEffect, useState} from 'react';
import {Modal} from "antd";
import CloseModal from "@/components/shared/close-modal/close-modal";
import css from "./login.module.css"
import FormInput from "@/components/shared/form-input/form-input";
import ModalTitle from "@/components/pages/home/login/components/modal-title/modal-title";
import {loginUser} from "@/slices/auth/auth";
import {clearMessage} from "@/slices/message/message";
import {useDispatch, useSelector} from "react-redux";
import {redirect, useRouter} from "next/navigation";
import {AppDispatch} from "@/store";

interface props {
    open: boolean,
    setOpen: (value: boolean) => void,
    setSignUpOpen: (value: boolean) => void
}

interface PasswordValidationResult {
    isValid: boolean;
    errors: string[];
}


interface AuthState {
    isLoggedIn: boolean;
}

interface MessageState {
    message: string; // Adjust the type according to your actual message type
}

// Root state combining different slices
interface RootState {
    auth: AuthState;
    message: MessageState;
}


const LoginModal = ({open, setOpen, setSignUpOpen}: props) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState(false)
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
    // const router = useRouter()

    const dispatch = useDispatch<AppDispatch>()
    const {isLoggedIn} = useSelector((state: RootState) => state.auth);
    const {message} = useSelector((state: RootState) => state.message);

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
                setLoading(false);
            })
    }

    const handleNavigate = () => {
        setOpen(false);
        setSignUpOpen(true)
    }

    const validatePassword = (password: string): PasswordValidationResult => {
        const errors: string[] = [];

        // Minimum length requirement
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long');
        }

        // Include both uppercase and lowercase letters
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            errors.push('Password must include both uppercase and lowercase letters');
        }

        // Include at least one digit
        if (!/\d/.test(password)) {
            errors.push('Password must include at least one digit');
        }

        // // Include at least one special character
        // if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        //     errors.push('Password must include at least one special character');
        // }

        return {
            isValid: errors.length === 0,
            errors,
        };
    };

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
                <p className={css.signup}>Нет аккаунта? <span onClick={handleNavigate}>Создать аккаунт</span></p>
            </form>
        </Modal>
    );
}

export default LoginModal;