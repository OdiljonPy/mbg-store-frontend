import React from 'react';
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import {useTranslations} from 'next-intl';
import {useSearchParams} from "next/navigation";

interface props {
    count: number
}

const ProductsCount = ({count}: props) => {
    const t = useTranslations()
    const searchParams = useSearchParams()
    const search: string | null = searchParams.get('search')

    const searchText = () => {
        if (search) {
            return 'search.found'
        }
        return 'search.categories'
    }

    return (
        <p className={css.text}>
            {t(searchText(), {products: count, categories: "4"})}
        </p>
    );
};

export default ProductsCount;