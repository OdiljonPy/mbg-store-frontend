import React from 'react';
import {UseFormReturn} from "react-hook-form";
import {IAddressForm} from "@/layout/components/header/top-header/data-types/address-form";
import css from './address-form.module.css'
import {useTranslation} from "next-i18next";
import {raleway} from "@/constants/fonts";
import FormError from "@/shared/form-error/form-error";
import AddressDetect from "@/layout/components/header/top-header/components/address-detect/address-detect";

interface props {
    methods: UseFormReturn<IAddressForm>

}

const AddressForm = ({methods}: props) => {
    const {
        register,
        formState: {errors}
    } = methods
    const {t} = useTranslation()
    return (
        <div className={`${css.form} ${raleway.className}`}>
            <div className={css.fields}>
                <h3 className={`${css.title}`}>
                    {t('address.typeAddress')}
                </h3>
                <div className={css.item}>
                    <div className={css.itemInner}>
                        <label className={css.label}>
                            {t('address.title')}
                        </label>
                        <AddressDetect/>
                    </div>
                    <input placeholder={t('address.placeholder')} {...register('address', {
                        required: {
                            value: true,
                            message: t('errors.required')
                        }
                    })} className={`${css.input} ${errors.address?.message ? css.inputError : ''}`}/>
                    <FormError error={errors.address?.message}/>
                </div>
            </div>
            <button type={'submit'} className={`${css.btn} ${raleway.className}`}>
                {t('approve')}
            </button>
        </div>
    );
};

export default AddressForm;