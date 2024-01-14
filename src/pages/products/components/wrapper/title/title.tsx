import React from 'react';
import css from "@/pages/products/components/wrapper/wrapper.module.css";
import {useTranslation} from "next-i18next";
import {useSearchParams} from "next/navigation";

interface props {
}

const Title = (props: props) => {
    const {t} = useTranslation()
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