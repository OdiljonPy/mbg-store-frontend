import React from 'react';
import css from './rate.module.css'
import {UseFormRegister, UseFormWatch} from "react-hook-form";
import {IFeedbackForm} from "@/components/pages/feedback/data-types/feedback";

interface props {
    register: UseFormRegister<IFeedbackForm>
    watch: UseFormWatch<IFeedbackForm>
    rate: number
}

const Rate = ({register, watch, rate}: props) => {

    const currentRate: string = watch('rate')

    const checked: boolean = currentRate ? rate <= Number(currentRate) : false

    return (
        <label>
            <input type={'radio'}
                   value={rate} {...register('rate')} className={css.input}/>
            {checked ? <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38.3048 17.6591L30.5532 24.4241L32.8752 34.4959C32.9981 35.0225 32.9631 35.5735 32.7744 36.0802C32.5858 36.5869 32.252 37.0268 31.8148 37.3448C31.3775 37.6629 30.8562 37.845 30.3161 37.8683C29.7759 37.8917 29.2408 37.7553 28.7777 37.4762L19.9932 32.1481L11.2276 37.4762C10.7645 37.7553 10.2294 37.8917 9.68926 37.8683C9.14909 37.845 8.62779 37.6629 8.19055 37.3448C7.7533 37.0268 7.4195 36.5869 7.23089 36.0802C7.04227 35.5735 7.00721 35.0225 7.13009 34.4959L9.44868 24.4344L1.6954 17.6591C1.28532 17.3054 0.988791 16.8385 0.842996 16.317C0.697201 15.7954 0.70863 15.2425 0.875851 14.7274C1.04307 14.2123 1.35864 13.7581 1.78298 13.4217C2.20733 13.0852 2.72155 12.8816 3.26118 12.8362L13.4809 11.9511L17.4701 2.43609C17.6784 1.93682 18.0298 1.51035 18.48 1.21037C18.9302 0.9104 19.4591 0.750336 20.0001 0.750336C20.5411 0.750336 21.07 0.9104 21.5202 1.21037C21.9704 1.51035 22.3218 1.93682 22.5301 2.43609L26.5313 11.9511L36.7476 12.8362C37.2872 12.8816 37.8014 13.0852 38.2258 13.4217C38.6501 13.7581 38.9657 14.2123 39.1329 14.7274C39.3001 15.2425 39.3116 15.7954 39.1658 16.317C39.02 16.8385 38.7234 17.3054 38.3134 17.6591H38.3048Z"
                        fill="#EF9545"/>
                </svg>
                : <svg width="40" height="38" viewBox="0 0 40 38"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                          d="M39.1123 14.7217C38.9458 14.2085 38.632 13.7556 38.2099 13.4194C37.7879 13.0832 37.2762 12.8786 36.7387 12.8311L26.5311 11.9511L22.5298 2.43609C22.3215 1.93682 21.9701 1.51035 21.5199 1.21037C21.0697 0.9104 20.5408 0.750336 19.9998 0.750336C19.4589 0.750336 18.93 0.9104 18.4798 1.21037C18.0296 1.51035 17.6782 1.93682 17.4698 2.43609L13.4806 11.9511L3.26094 12.8362C2.72131 12.8816 2.20708 13.0852 1.78274 13.4217C1.3584 13.7581 1.04283 14.2123 0.875607 14.7274C0.708386 15.2425 0.696956 15.7954 0.842752 16.317C0.988547 16.8385 1.28508 17.3054 1.69516 17.6591L9.44844 24.4344L7.12469 34.4959C7.00181 35.0225 7.03687 35.5735 7.22549 36.0802C7.4141 36.5869 7.7479 37.0268 8.18515 37.3448C8.62239 37.6629 9.14369 37.845 9.68386 37.8683C10.224 37.8917 10.7591 37.7553 11.2222 37.4762L19.9878 32.1481L28.7723 37.4762C29.2354 37.7553 29.7705 37.8917 30.3107 37.8683C30.8508 37.845 31.3721 37.6629 31.8094 37.3448C32.2466 37.0268 32.5804 36.5869 32.769 36.0802C32.9577 35.5735 32.9927 35.0225 32.8698 34.4959L30.5478 24.4241L38.2994 17.6591C38.7094 17.3042 39.0053 16.8359 39.15 16.3133C39.2946 15.7907 39.2815 15.2369 39.1123 14.7217ZM36.4964 15.5811L28.7448 22.3461C28.3676 22.6743 28.0869 23.0991 27.9331 23.5748C27.7792 24.0506 27.758 24.5593 27.8717 25.0462L30.2006 35.125L21.423 29.7969C20.9947 29.5361 20.503 29.3981 20.0016 29.3981C19.5002 29.3981 19.0084 29.5361 18.5802 29.7969L9.81453 35.125L12.128 25.0531C12.2417 24.5662 12.2204 24.0575 12.0666 23.5817C11.9128 23.1059 11.6321 22.6811 11.2548 22.353L3.49984 15.5914C3.49921 15.5863 3.49921 15.5811 3.49984 15.5759L13.7161 14.6925C14.2149 14.6485 14.6922 14.4692 15.0966 14.1739C15.5009 13.8786 15.817 13.4785 16.0106 13.0167L19.9998 3.51374L23.9873 13.0167C24.181 13.4785 24.4971 13.8786 24.9014 14.1739C25.3058 14.4692 25.7831 14.6485 26.2819 14.6925L36.4998 15.5759C36.4998 15.5759 36.4998 15.5862 36.4998 15.588L36.4964 15.5811Z"
                          fill="#DADADA"/>
                </svg>}
        </label>
    );
};

export default Rate;