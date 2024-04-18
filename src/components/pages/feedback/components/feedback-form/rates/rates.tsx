import React from 'react';
import css from "@/components/pages/feedback/components/feedback-form/feedback-form.module.css";
import Rate from "@/components/pages/feedback/components/feedback-form/rates/rate/rate";
import {useTranslations} from "next-intl";
import {UseFormRegister, UseFormWatch} from "react-hook-form";
import {IFeedbackForm} from "@/components/pages/feedback/data-types/feedback";
import FormError from "@/components/shared/form-error/form-error";

interface props {
    register: UseFormRegister<IFeedbackForm>
    watch: UseFormWatch<IFeedbackForm>
    errors:string | undefined
}

const rates: number[] = [1, 2, 3, 4, 5]

const Rates = ({register, watch,errors}: props) => {
    const t = useTranslations()
    return (
        <span className={css.wrapper}>
                <span className={css.rating}>
                {rates.map((rate) => (
                    <Rate key={rate} register={register} watch={watch} rate={rate} errors={errors}/>
                ))}
                    <FormError error={errors}/>
                </span>
                <span className={css.labels}>
                    <span>
                        {t('feedback.bad')}
                    </span>
                     <span>
                        {t('feedback.excellent')}
                    </span>
                </span>
        </span>
    );
};

export default Rates;