import React from 'react';
import css from './catalog-item.module.css'
import Link from "next/link";
import {ICategoryItem} from "@/layout/components/header/main-header/data-types/category";
import {useSearchParams} from "next/navigation";
import {ParsedUrlQueryInput} from "querystring";

interface props {
    item: ICategoryItem
}


const CatalogItem = ({item}: props) => {
    const searchParams = useSearchParams()
    const filters: string | null = searchParams.get('filters')

    const {
        title
    } = item

    const queries: ParsedUrlQueryInput = {
        category: title,
        sort: 'popular',
        filters: filters
    }

    if (!filters) {
        delete queries.filters
    }

    return (
        <Link href={{
            pathname: `/products`,
            query: queries
        }} className={css.item}>
            <span className={css.text}>
                {title}
           </span>
            <svg className={css.icon} width="16" height="14" viewBox="0 0 16 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.3172 7.44218L9.69219 13.0672C9.57491 13.1845 9.41585 13.2503 9.25 13.2503C9.08415 13.2503 8.92509 13.1845 8.80781 13.0672C8.69054 12.9499 8.62465 12.7908 8.62465 12.625C8.62465 12.4591 8.69054 12.3001 8.80781 12.1828L13.3664 7.625H1.125C0.95924 7.625 0.800269 7.55915 0.683058 7.44194C0.565848 7.32473 0.5 7.16576 0.5 7C0.5 6.83424 0.565848 6.67527 0.683058 6.55805C0.800269 6.44084 0.95924 6.375 1.125 6.375H13.3664L8.80781 1.81718C8.69054 1.69991 8.62465 1.54085 8.62465 1.375C8.62465 1.20914 8.69054 1.05008 8.80781 0.932809C8.92509 0.815534 9.08415 0.749649 9.25 0.749649C9.41585 0.749649 9.57491 0.815534 9.69219 0.932809L15.3172 6.55781C15.3753 6.61585 15.4214 6.68478 15.4529 6.76066C15.4843 6.83653 15.5005 6.91786 15.5005 7C15.5005 7.08213 15.4843 7.16346 15.4529 7.23933C15.4214 7.31521 15.3753 7.38414 15.3172 7.44218Z"
                    fill="#C2C2C2"/>
            </svg>
        </Link>
    );
};

export default CatalogItem;