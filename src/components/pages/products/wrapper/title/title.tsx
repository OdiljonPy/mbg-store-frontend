import React from 'react';
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import {useTranslations} from 'next-intl';
import {useSearchParams} from "next/navigation";

interface props {
}

const Title = (props: props) => {
    const t = useTranslations()
    const searchParams = useSearchParams()
    const search: string | null = searchParams.get('search')
    const category: string | null = searchParams.get('category')

    const chooseTitle = () => {
        if (search || category) {
            if (search) {
                return `${t('products.title')}: ${search}`
            }
            return category
        }
        return t('categories.all')
    }

    return (
        <h2 className={css.title}>
            {chooseTitle()}
        </h2>
    );
};

export default Title;