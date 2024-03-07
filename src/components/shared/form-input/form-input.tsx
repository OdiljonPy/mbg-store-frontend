import React, {useState} from 'react';
import css from "./form-input.module.css"
import {PhoneInput} from "react-international-phone";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage} from "@/slices/message/message";
import {AppDispatch} from "@/store";
import CheckCircle from "../../../../public/images/icons/check-circle.svg"
import Image from "next/image";
import {setPhoneNumber} from "@/slices/phone_numer/phoneNumber";

interface Props {
    label: string,
    readonly type: string,
    placeholder?: string,
    setValue: (value: string) => void,
    id?: string,
    name?: string,
    path?: string,
    passwordRequirement?: IPasswordReq[],
    handleInputChange?: (value: string) => void
}

interface IPasswordReq {
    title: string,
    isValid: boolean
}

interface IState {
    message: string
}

function FormInput({type, setValue, label, placeholder, id, path, passwordRequirement, handleInputChange}: Props) {
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const message = useSelector((state: IState) => state.message)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value ?? '');
        dispatch(clearMessage())
        if (handleInputChange)
            handleInputChange(e.target.value)
    };


    if (type === "phone") {
        return (
            <div className={css.formInputBox}>
                <label className={css.formLabel} htmlFor={id}>{label}</label>
                <PhoneInput
                    hideDropdown={true}
                    className={css.phoneInput}
                    inputClassName={css.formInput}
                    defaultCountry="uz"
                    inputProps={{
                        placeholder: "+998"
                    }}
                    onChange={(phone) => {
                        dispatch(setPhoneNumber(phone))
                        setValue(phone)
                    }}
                />
            </div>
        )
    }
    if (type === "password") {
        const isValid = !passwordRequirement?.map(item => item.isValid).includes(false)
        return (
            <div className={css.formInputBox}>
                <div className={css.formInputTop}>
                    <label className={css.formLabel} htmlFor={id}>{label}</label>
                    <a href="">Забыли пароль?</a>
                </div>
                <div className={css.formPassword}>
                    <input
                        className={`${css.formInput}`}
                        onChange={handleChange} autoComplete="current-password" id={id}
                        type={showPassword ? "text" : type}
                        placeholder={placeholder}/>
                    {path === "signup" ?
                        <ul className={css.validationBox} style={{display: isValid ? "none" : ""}}>
                            {passwordRequirement?.map(item => <li
                                className={css.validation} key={item.title}>
                                <p>{item.title}</p>
                                {item.isValid ? <Image src={CheckCircle} alt={""}/> : ""}
                            </li>)}
                        </ul> : ""
                    }
                    {showPassword ?
                        <svg onClick={() => setShowPassword(false)} className={css.endIcon} width="24" height="25"
                             viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.4574 15.7975C30.4149 15.7025 29.3924 13.4362 27.1037 11.1475C24.9837 9.0275 21.3374 6.5 15.9999 6.5C10.6624 6.5 7.01619 9.0275 4.89619 11.1475C2.60744 13.4362 1.58494 15.7025 1.54244 15.7975C1.51461 15.8616 1.50024 15.9307 1.50024 16.0006C1.50024 16.0705 1.51461 16.1396 1.54244 16.2038C1.58494 16.3 2.60744 18.565 4.89619 20.8538C7.02119 22.9788 10.6637 25.5 15.9999 25.5C21.3362 25.5 24.9837 22.9738 27.1037 20.8538C29.3924 18.565 30.4149 16.3 30.4574 16.2038C30.4853 16.1396 30.4996 16.0705 30.4996 16.0006C30.4996 15.9307 30.4853 15.8616 30.4574 15.7975ZM26.3699 20.1725C23.4862 23.0475 19.9949 24.5 15.9949 24.5C11.9949 24.5 8.50869 23.0438 5.61994 20.1725C4.3908 18.9467 3.3571 17.5395 2.55494 16C3.35859 14.4602 4.394 13.0529 5.62494 11.8275C8.51369 8.95625 11.9999 7.5 15.9999 7.5C19.9999 7.5 23.4862 8.95625 26.3749 11.8275C27.6057 13.0531 28.6411 14.4603 29.4449 16C28.6413 17.5398 27.6059 18.947 26.3749 20.1725H26.3699ZM15.9999 10.5C14.9121 10.5 13.8488 10.8226 12.9443 11.4269C12.0398 12.0313 11.3349 12.8902 10.9186 13.8952C10.5023 14.9002 10.3934 16.0061 10.6056 17.073C10.8178 18.1399 11.3417 19.1199 12.1109 19.8891C12.88 20.6583 13.86 21.1821 14.9269 21.3943C15.9938 21.6065 17.0997 21.4976 18.1047 21.0813C19.1097 20.6651 19.9687 19.9601 20.573 19.0556C21.1774 18.1512 21.4999 17.0878 21.4999 16C21.4983 14.5418 20.9183 13.1438 19.8872 12.1127C18.8561 11.0816 17.4581 10.5017 15.9999 10.5ZM15.9999 20.5C15.1099 20.5 14.2399 20.2361 13.4999 19.7416C12.7599 19.2471 12.1831 18.5443 11.8425 17.7221C11.5019 16.8998 11.4128 15.995 11.5864 15.1221C11.76 14.2492 12.1886 13.4474 12.818 12.818C13.4473 12.1887 14.2491 11.7601 15.122 11.5865C15.9949 11.4128 16.8997 11.5019 17.722 11.8425C18.5443 12.1831 19.2471 12.7599 19.7416 13.4999C20.236 14.24 20.4999 15.11 20.4999 16C20.4999 17.1935 20.0258 18.3381 19.1819 19.182C18.338 20.0259 17.1934 20.5 15.9999 20.5Z"
                                fill="#343330"/>
                        </svg> :
                        <svg onClick={() => setShowPassword(true)} className={css.endIcon} width="24" height="25"
                             viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.375 16.9063C21.2893 16.9551 21.1948 16.9866 21.097 16.9989C20.9991 17.0112 20.8998 17.0041 20.8047 16.978C20.7097 16.9518 20.6207 16.9072 20.5428 16.8467C20.465 16.7861 20.3999 16.7108 20.3512 16.625L18.57 13.5125C17.5344 14.2127 16.392 14.7402 15.1875 15.0744L15.7378 18.3763C15.754 18.4735 15.7509 18.5729 15.7287 18.6689C15.7065 18.7649 15.6656 18.8556 15.6083 18.9358C15.551 19.016 15.4784 19.0841 15.3948 19.1363C15.3112 19.1884 15.2181 19.2236 15.1209 19.2397C15.0809 19.2462 15.0405 19.2497 15 19.25C14.8225 19.2498 14.6509 19.1866 14.5157 19.0718C14.3804 18.9569 14.2903 18.7979 14.2612 18.6228L13.7203 15.381C12.5795 15.5397 11.4223 15.5397 10.2815 15.381L9.74058 18.6228C9.71147 18.7982 9.62103 18.9575 9.48538 19.0724C9.34974 19.1872 9.1777 19.2502 8.99995 19.25C8.9585 19.2498 8.91712 19.2464 8.8762 19.2397C8.77898 19.2236 8.6859 19.1884 8.60227 19.1363C8.51864 19.0841 8.44611 19.016 8.38882 18.9358C8.33153 18.8556 8.29061 18.7649 8.26839 18.6689C8.24617 18.5729 8.24309 18.4735 8.25933 18.3763L8.81245 15.0744C7.60835 14.7391 6.46664 14.2107 5.43183 13.5097L3.6562 16.625C3.55675 16.7983 3.39252 16.925 3.19965 16.9772C3.00678 17.0294 2.80107 17.0029 2.62776 16.9035C2.45446 16.804 2.32777 16.6398 2.27555 16.4469C2.22333 16.254 2.24987 16.0483 2.34933 15.875L4.22433 12.5938C3.56573 12.0248 2.96013 11.3972 2.41495 10.7188C2.34696 10.6429 2.29516 10.5539 2.2627 10.4573C2.23024 10.3607 2.2178 10.2585 2.22616 10.1569C2.23451 10.0554 2.26347 9.95657 2.31127 9.86657C2.35908 9.77657 2.42472 9.69726 2.5042 9.63347C2.58367 9.56969 2.67531 9.52277 2.77353 9.49558C2.87174 9.46839 2.97446 9.4615 3.07542 9.47533C3.17639 9.48916 3.27347 9.52342 3.36075 9.57602C3.44804 9.62862 3.52368 9.69846 3.58308 9.78127C5.13933 11.7069 7.86183 14 12 14C16.1381 14 18.8606 11.7041 20.4168 9.78127C20.4755 9.69676 20.551 9.62525 20.6386 9.57117C20.7261 9.51708 20.8238 9.4816 20.9257 9.46691C21.0275 9.45222 21.1313 9.45865 21.2306 9.48579C21.3298 9.51293 21.4224 9.56021 21.5026 9.62468C21.5828 9.68915 21.6489 9.76943 21.6968 9.86054C21.7446 9.95164 21.7732 10.0516 21.7807 10.1542C21.7883 10.2569 21.7746 10.3599 21.7406 10.4571C21.7066 10.5542 21.653 10.6433 21.5831 10.7188C21.0379 11.3972 20.4323 12.0248 19.7737 12.5938L21.6487 15.875C21.699 15.9606 21.7319 16.0552 21.7454 16.1535C21.7588 16.2519 21.7527 16.3519 21.7272 16.4478C21.7017 16.5437 21.6575 16.6337 21.597 16.7123C21.5366 16.791 21.4611 16.857 21.375 16.9063Z"
                                fill="#C2C2C2"/>
                        </svg>}
                </div>
            </div>
        );
    }
}

export default FormInput;