import css from "./form-input.module.css"
import React, {ChangeEvent} from "react";
import { UseFormReturn} from "react-hook-form";
import {useTranslations} from "next-intl";
import {IAddressForm} from "@/layout/components/header/top-header/data-types/address-form";
import FormError from "@/components/shared/form-error/form-error";

const FormInput = ({label,placeholder ,methods,field}) =>{
    const {setValue, formState: {errors}, register} = methods
    const t = useTranslations()

    const {onChange, onBlur, ref, name} = register(`${field}`, {
        required: {
            value: true,
            message: t('errors.required')
        },
    })
    const onChangeHandler = (e) => {
        onChange(e)
    }
    return(
        <div>
            <label className={css.label}>
                {t(label)}
            </label>
            <input ref={ref} onBlur={onBlur} onChange={onChangeHandler} name={name}
                   className={`${css.input} `} placeholder={t(placeholder)}/>
            <FormError error={errors.field?.message}/>
        </div>
    )
}

export default FormInput