import React from 'react';
import css from "@/pages/products/components/wrapper/wrapper.module.css";
import {useTranslation} from "next-i18next";
import {useSearchParams} from "next/navigation";

interface props {

}

const ProductsCount = (props: props) => {
    const {t} = useTranslation()
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
            {t(searchText(), {products: "1256", categories: "4"})}
        </p>
    );
};

export default ProductsCount;