import React, {useEffect, useState} from "react";
import css from "./recipient.module.css"

import inputCss from "@/styles/input.module.css";
import FormError from "@/components/shared/form-error/form-error";
import {useFormContext, UseFormReturn} from "react-hook-form";
import {useTranslations} from "next-intl";

import Heading from "@/components/pages/cart/common/heading/heading";
import {PhoneInput} from "react-international-phone";

import {IOrder, IPostOrder} from "@/data-types/order/order";
import FormInput from "@/components/shared/form/form-input/form-input";
import {raleway} from "@/constants/fonts/fonts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchUser} from "@/slices/auth/user";
interface props{
}
const Recipient = ({}:props) =>{
    const t = useTranslations()
    const {full_name,phone_number} = useSelector((state:RootState)=> state.user.user)

    const { watch,setValue} = useFormContext<IPostOrder>()
    const fullName = watch('full_name')

    const [userName,setUserName] = useState(full_name)

    const changeName = (name:string) =>{
        setUserName(name)
        setValue('full_name',name)
    }

    useEffect(() => {
        setValue('full_name',full_name?full_name:fullName)
        setValue('phone_number',phone_number)
    }, []);

    return(
        <div>
            <Heading title='cart.delivery.title_one' index={1} />
            <form  className={css.form}>
                <div className={css.flex}>

                    <div className={css.field}>
                        <label className={css.label}>
                            {t('cart.delivery.name_label')}
                            <span className={css.required}>*</span>
                        </label>
                        <input  value={userName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> changeName(e.target.value) }  placeholder={t('cart.delivery.name_placeholder')}
                               className={`${inputCss.input}  ${raleway.className} `}/>


                    </div>
                    <div className={css.field}>
                            <label className={css.label}>
                                {t('cart.delivery.phone_label')}
                                <span className={css.required}>*</span>
                            </label>
                            <PhoneInput
                                hideDropdown={true}
                                inputClassName={`${inputCss.input}`}
                                defaultCountry='uz'
                                inputProps={{
                                    placeholder: "+998",
                                }}
                                placeholder={"Номер телефона"}
                                value={phone_number}
                                onChange={(phone) => setValue('phone_number',phone)}
                            />
                        {/*<FormError error={errors.full_name?.message}/>*/}
                        </div>

                    {/*<FormInput value={userName} label={t('cart.delivery.name_label')} type={'name'} changeValue={setUserName} required placeholder={t('cart.delivery.name_placeholder')}/>*/}

                    {/*<FormInput value={userPhone} label={t('cart.delivery.phone_label')} type={'phone'} changeValue={setUserPhone} required placeholder={'+998'}/>*/}
                </div>
            </form>
        </div>
    )
}

export default Recipient