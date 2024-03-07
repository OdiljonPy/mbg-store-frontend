import React, {useState} from 'react';
import {Modal} from "antd";
import CloseModal from "@/components/shared/close-modal/close-modal";
import css from "./signup.module.css"
import FormInput from "@/components/shared/form-input/form-input";
import ModalTitle from "@/components/pages/home/login/components/modal-title/modal-title";
import Offer from "@/components/pages/home/signup/components/offer/offer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store";
import {setPhoneNumber} from "@/slices/phone_numer/phoneNumber";
import {signUpUser} from "@/slices/auth/auth";
import {setOtpKey} from "@/slices/otpKey/otpKey";

interface Props {
    readonly open: boolean,
    setOpen: (value: boolean) => void,
    setLoginOpen: (value: boolean) => void,
    setOtpModalOpen: (value: boolean) => void,
}

interface IState {
    phoneNumber: string,
}

const SignUpModal = ({open, setOpen, setLoginOpen, setOtpModalOpen}: Props) => {
    const phoneNumber = useSelector((state: IState) => state.phoneNumber)
    const [password, setPassword] = useState<string>('');
    const [offer, setOffer] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const [passwordRequirement, setPasswordRequirement] = useState([
        {
            title: "не менее 8 символов",
            isValid: false,
        },
        {
            title: "минимум 1 буква",
            isValid: false,
        },
        {
            title: "минимум 1 цифра",
            isValid: false,
        }
    ])

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
            .then((res) => {
                dispatch(setOtpKey(res.result.otp_key))
                setOpen(false)
                setOtpModalOpen(true)
            })
            .catch(() => {
            })

    }
    const handleNavigate = () => {
        setOpen(false);
        setLoginOpen(true)
    }

    const validatePassword = (newPassword: string) => {
        const updatedRequirements = passwordRequirement.map((requirement) => {
            switch (requirement.title) {
                case 'не менее 8 символов':
                    return {...requirement, isValid: newPassword.length >= 8};
                case 'минимум 1 буква':
                    return {...requirement, isValid: /[a-zA-Z]/.test(newPassword)};
                case 'минимум 1 цифра':
                    return {...requirement, isValid: /\d/.test(newPassword)};
                default:
                    return requirement;
            }
        });
        setPasswordRequirement(updatedRequirements);
    };

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
                <FormInput handleInputChange={validatePassword}
                           passwordRequirement={passwordRequirement}
                           path={"signup"} setValue={setPassword} name={"password"} label={"Пароль"}
                           type={"password"}
                           placeholder="Введите пароль"
                           id="password"/>
                <Offer offer={offer} setOffer={setOffer}/>

                <button disabled={(!(offer && phoneNumber.length === 13 && password))} className={css.btn}
                        type={"submit"}>Создать аккаунт
                </button>
                <p className={css.signup}>Есть аккаунт? <a onClick={handleNavigate}>Войти в аккаунт</a></p>
            </form>
        </Modal>
    );
}

export default SignUpModal;