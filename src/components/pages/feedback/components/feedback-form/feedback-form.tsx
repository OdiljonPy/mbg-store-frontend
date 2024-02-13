import React, {ChangeEvent} from 'react';
import css from './feedback-form.module.css'
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {IFeedbackForm} from "@/components/pages/feedback/data-types/feedback";
import Title from "@/components/pages/product/wrapper/components/info/description/title/title";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import {useTranslations} from "next-intl";
import Rates from "@/components/pages/feedback/components/feedback-form/rates/rates";
import inputCss from '@/styles/input.module.css'
import FormError from "@/components/shared/form-error/form-error";
import CustomSwitch from "@/components/shared/custom-switch/custom-switch";
import {raleway} from "@/constants/fonts/fonts";
import ImageUploader from "@/components/pages/feedback/components/feedback-form/image-uploader/image-uploader";
import uploaderCss from './image-uploader/image-uploader.module.css'
import Image from "@/components/pages/feedback/components/feedback-form/image/image";


interface props {

}


const FeedbackForm = (props: props) => {
    const t = useTranslations()
    const {resetField, clearErrors, handleSubmit, watch, register, formState: {errors}, control, setValue} = useForm<IFeedbackForm>({
        mode: 'all'
    })

    const {fields, append, remove} = useFieldArray<IFeedbackForm>({
        control,
        name: "images"
    });


    const anonymus: boolean = watch('anonymus')
    const onUploadImage = (image: File) => {
        append({file: image})
    }
    const onSendFeedback = (values: IFeedbackForm) => {

    }

    return (
        <form onSubmit={handleSubmit(onSendFeedback)} className={css.form}>
            <div className={css.title}>
                <Title title={'Кукуруза Bonduelle Classique сладкая'}/>
                <p className={css.weight}>
                    170г
                </p>
            </div>
            <Seller seller={'Зеленая лавка'}/>
            <Rates register={register} watch={watch}/>
            <div className={css.flex}>
                <div className={css.field}>
                    <label className={css.label}>
                        {t('feedback.name')}
                    </label>
                    <input {...register('name', {
                        required: {
                            value: !anonymus,
                            message: t('errors.required')
                        }
                    })} disabled={anonymus} placeholder={t('feedback.namePlaceholder')}
                           className={`${inputCss.input} ${anonymus ? inputCss.disabled : ''} ${raleway.className} ${errors.name?.message ? inputCss.error : ''} `}/>
                    <FormError error={errors.name?.message}/>
                </div>

                <Controller control={control} rules={{
                    required: {
                        value: true,
                        message: t('errors.required')
                    },
                    onChange: (e: {target: {value: boolean}}) => {
                        setValue('anonymus', e.target.value)
                        resetField('name')
                        clearErrors('name')
                    }
                }} render={({field: {onChange, value}}) => (
                    <div className={css.switch}>
                        <label className={css.text}>
                            {t('feedback.anonymus')}
                        </label>
                        <CustomSwitch onChange={onChange} checked={value}/>
                    </div>
                )} name={'anonymus'}/>
            </div>
            <div className={css.textarea}>
                <label className={css.label}>
                    {t('feedback.message')}
                </label>
                <textarea {...register('message', {
                    required: {
                        value: true,
                        message: t('errors.required')
                    }
                })} placeholder={t('feedback.messagePlaceholder')}
                          className={`${inputCss.input} ${raleway.className} ${inputCss.textarea} ${errors.name?.message ? inputCss.error : ''} `}/>
                <FormError error={errors.name?.message}/>
            </div>
            <label className={` ${uploaderCss.label}`}>
                {t('feedback.photo')} <span className={uploaderCss.text}>({t('feedback.photoDetails')})</span>
            </label>
            <div className={css.images}>
                <ImageUploader isHide={fields.length >= 4} onUploadImage={onUploadImage}/>
                {fields?.map((image, i) => (
                    <Image index={i} remove={remove} image={image.file} key={image.id}/>
                ))}
            </div>
            <div className={css.actions}>
                <button type={'submit'} className={css.btn}>
                    {t('feedback.send')}
                </button>
            </div>
        </form>
    )
        ;
};

export default FeedbackForm;