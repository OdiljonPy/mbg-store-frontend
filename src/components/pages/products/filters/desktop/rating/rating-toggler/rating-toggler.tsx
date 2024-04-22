import React from 'react';
import {useTranslations} from 'next-intl';
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import css from "@/components/shared/switch/switch.module.css";
import CustomSwitch from "@/components/shared/custom-switch/custom-switch";

interface props {

}

const RatingToggler = (props: props) => {
    const t = useTranslations()
    const pathname = usePathname()
    const {push, query} = useRouter()
    const searchParams = useSearchParams()
    const withFeedback: string | null = searchParams.get('withFeedback')

    const onChange = (checked: boolean) => {
        const queries: ParsedUrlQuery = {
            ...query
        }
        if (checked) {
            queries.withFeedback = 'true'
        } else {
            delete queries.withFeedback
            // delete queries.rating
        }
        push({
            pathname,
            query: {
                ...queries,
                changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            }
        }, undefined, {
            scroll: false
        })
    }
    return (
        <div className={css.wrapper}>
            <p className={css.text}>
                {t('products.withFeedbacks')}
            </p>
            <CustomSwitch checked={!!withFeedback} onChange={onChange}/>
        </div>
    );
};

export default RatingToggler;