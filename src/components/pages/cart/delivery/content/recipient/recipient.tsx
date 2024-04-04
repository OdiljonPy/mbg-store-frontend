import React, {useState} from "react";
import css from "./recipient.module.css"

import inputCss from "@/styles/input.module.css";
import FormError from "@/components/shared/form-error/form-error";
import { useFormContext} from "react-hook-form";
import {useTranslations} from "next-intl";

import Heading from "@/components/pages/cart/common/heading/heading";
import {PhoneInput} from "react-international-phone";

import {IOrder} from "@/data-types/order/order";
import FormInput from "@/components/shared/form/form-input/form-input";
import {raleway} from "@/constants/fonts/fonts";
interface props{

}
const Recipient = (props:props) =>{
    const t = useTranslations()
    const [userName,setUserName] = useState("")
    const [userPhone,setUserPhone] = useState("")



    const {unregister, watch,setValue} = useFormContext<IOrder>()
    const fullName = watch('full_name')
    const phoneNumber = watch('phone_number')
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
                        <input  value={fullName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setValue('full_name',e.target.value) }  placeholder={t('cart.delivery.name_placeholder')}
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
                                value={phoneNumber}
                                onChange={(phone) => setValue('phone_number',phone)}
                            />
                            {/*<FormError error={errors.phone?.message}/>*/}
                        </div>

                    {/*<FormInput value={userName} label={t('cart.delivery.name_label')} type={'name'} changeValue={setUserName} required placeholder={t('cart.delivery.name_placeholder')}/>*/}

                    {/*<FormInput value={userPhone} label={t('cart.delivery.phone_label')} type={'phone'} changeValue={setUserPhone} required placeholder={'+998'}/>*/}
                </div>
            </form>
        </div>
    )
}

export default Recipient