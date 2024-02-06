import css from "./recipient.module.css"
import {raleway} from "@/constants/fonts/fonts";
import inputCss from "@/styles/input.module.css";
import FormError from "@/components/shared/form-error/form-error";
import { useForm} from "react-hook-form";
import React, {useState} from "react";
import {useTranslations} from "next-intl";
import {IFeedbackForm} from "@/components/pages/feedback/data-types/feedback";
interface props{

}
interface IUserInfo{
    name:string,
    phone:string
}
const Recipient = (props:props) =>{
    const t = useTranslations()
    const {resetField, clearErrors, handleSubmit, watch, register, formState: {errors}, control, setValue} = useForm<IUserInfo>({
        mode: 'all'
    })

function getUserData(data:any):void {
    resetField('name')
    resetField('phone')
}
    return(
        <div>
            <h2 className={`${css.title} ${raleway.className}`}>1. Получатель заказа</h2>
            <form onSubmit={handleSubmit(getUserData)}>
                <div className={css.flex}>
                    <div className={css.field}>
                        <label className={css.label}>
                            {t('cart.delivery.name_label')}
                            <span><sup className={css.required}>*</sup></span>
                        </label>
                        <input {...register('name', {
                            required: {
                                value:true,
                                message: t('errors.required')
                            }
                        })}  placeholder={t('cart.delivery.name_placeholder')}
                               className={`${inputCss.input}  ${raleway.className} ${errors.name?.message ? inputCss.error : ''} `}/>
                        <FormError error={errors.name?.message}/>
                    </div>
                    <div className={css.field}>
                        <label className={css.label}>
                            {t('cart.delivery.phone_label')} <span><sup className={css.required}>*</sup></span>
                        </label>
                        <input {...register('phone', {
                            required: {
                                value:true,
                                message: t('errors.required')
                            }
                        })}  placeholder='(99) 999-99-99'
                               className={`${inputCss.input}  ${raleway.className} ${errors.phone?.message ? inputCss.error : ''} `}/>
                        <FormError error={errors.phone?.message}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Recipient