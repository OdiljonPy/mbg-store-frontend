import React, {useState} from "react";
import css from "./recipient.module.css"
import {raleway} from "@/constants/fonts/fonts";
import inputCss from "@/styles/input.module.css";
import FormError from "@/components/shared/form-error/form-error";
import { useForm} from "react-hook-form";
import {useTranslations} from "next-intl";

import Heading from "@/components/pages/cart/common/heading/heading";
import {PhoneInput} from "react-international-phone";
interface props{

}
interface IUserInfo{
    name:string,
    phone:string
}
const Recipient = (props:props) =>{
    const t = useTranslations()
    const [userName,setUserName] = useState("")
    const [userPhone,setUserPhone] = useState("")

    const {resetField, clearErrors, handleSubmit, watch, register, formState: {errors}, control, setValue} = useForm<IUserInfo>({
        mode: 'all'
    })

    return(
        <div>
            <Heading title='Получатель заказа' index={1} />
            <form  className={css.form}>
                <div className={css.flex}>
                    <div className={css.field}>
                        <label className={css.label}>
                            {t('cart.delivery.name_label')}
                            <span className={css.required}>*</span>
                        </label>
                        <input  value={userName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUserName(e.target.value)}  placeholder={t('cart.delivery.name_placeholder')}
                               className={`${inputCss.input}  ${raleway.className} `}/>

                    </div>

                        <div className={css.field}>
                            <label className={css.label}>
                                {t('cart.delivery.phone_label')}
                                <span className={css.required}>*</span>
                            </label>
                            <PhoneInput
                                hideDropdown={true}
                                inputClassName={inputCss.input}
                                defaultCountry='uz'
                                inputProps={{
                                    placeholder: "+998",
                                }}
                                placeholder={"Номер телефона"}
                                value={userPhone}
                                onChange={(phone) => setUserPhone(phone)}
                            />
                            <FormError error={errors.phone?.message}/>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Recipient