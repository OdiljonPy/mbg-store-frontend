import React, {ChangeEvent} from 'react';
import css from './rate.module.css'
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import CustomLabel from "@/components/pages/products/filters/desktop/rating/custom-label/custom-label";

interface props {
    rate: ICustomRadio
}

const Rate = ({rate}: props) => {
    const {title, key, count} = rate
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {push, query} = useRouter()
    const rating: string | null = searchParams.get('rating')
    const withFeedback: string | null = searchParams.get('withFeedback')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const queries: ParsedUrlQuery = {
            ...query
        }

        if (e.target.checked) {
            queries.rating = key
            queries.withFeedback = 'true'
        } else {
            delete queries.rating
            delete queries.withFeedbacks
        }

        push({
            pathname,
            query: {
                ...queries,
                changeFilter : searchParams.get('changeFilter') === 'true' ? 'false' : 'true'
            }
        }, undefined, {scroll: false})
    }
    return (
        <div className={css.rate}>
            <div className={css.checkbox}>
                <CustomRadio radio={rate} options={{
                    onChange: onChange,
                    disabled: false,
                    checked: rating === rate.key
                }}>
                   <CustomLabel title={title} count={count}/>
                </CustomRadio>
            </div>
        </div>
    );
};

export default Rate;