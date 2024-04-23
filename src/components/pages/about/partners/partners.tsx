import React, {useEffect} from 'react';
import css from './partners.module.css'
import HeadingLine from "@/components/pages/about/heading-line/heading-line";
import PartnersSlider from "@/components/pages/about/partners/partners-slider/partners-slider";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchPartner} from "@/slices/base/partner/partnerSlice";
import Skeleton from "react-loading-skeleton";
import FormError from "@/components/shared/form-error/form-error";

interface Props {

}

const Partners = (props: Props) => {
    const {loading,partner,error} = useSelector((state:RootState)=>state.partner)
    const dispatch = useDispatch<AppDispatch>()

    console.log(partner,"partner")

    useEffect(() => {
        dispatch(fetchPartner())
    }, [dispatch]);

    if (error)
        return (
            <FormError error='Что-то пошло не так. Попробуйте обновить страницу' />
        );

    return (
        <div className={'container'}>
            <section className={css.partners}>
                <div className={'container'}>
                    <HeadingLine title={'about.partners'}/>
                </div>
                {
                    loading ? <Skeleton className={css.skeleton}/> :
                        <PartnersSlider partners={partner}/>
                }
            </section>
        </div>
    );
};

export default Partners;