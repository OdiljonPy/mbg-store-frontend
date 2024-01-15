import React from 'react';
import css from './heading-line.module.css'
import {useTranslation} from "next-i18next";
import {IHeadingLine} from "@/components/pages/home/heading-line/data-types/heading-line";
import Link from "next/link";

interface props {
    heading: IHeadingLine
}

const HeadingLine = ({heading}: props) => {
    const {t} = useTranslation()
    const {
        title,
        count
    } = heading
    return (
        <div className={css.heading}>
            <h3 className={css.title}>
                {t(title)}
            </h3>
            <Link href={`/`} className={`${css.link} ${!count ? css.hide : ''}`}>
                <span className={css.text}>
                    {count} {t('products.plural').toLowerCase()}
                </span>
                <svg className={css.icon} width="24" height="24" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.413 23.7117C19.5001 23.7988 19.5692 23.9022 19.6164 24.016C19.6635 24.1298 19.6878 24.2518 19.6878 24.375C19.6878 24.4982 19.6635 24.6202 19.6164 24.734C19.5692 24.8478 19.5001 24.9512 19.413 25.0383C19.3259 25.1254 19.2225 25.1945 19.1087 25.2416C18.9949 25.2888 18.8729 25.313 18.7498 25.313C18.6266 25.313 18.5046 25.2888 18.3908 25.2416C18.277 25.1945 18.1736 25.1254 18.0865 25.0383L8.71148 15.6633C8.62431 15.5762 8.55517 15.4728 8.50799 15.359C8.46081 15.2452 8.43652 15.1232 8.43652 15C8.43652 14.8768 8.46081 14.7548 8.50799 14.641C8.55517 14.5272 8.62431 14.4238 8.71148 14.3367L18.0865 4.96172C18.2624 4.78581 18.501 4.68698 18.7498 4.68698C18.9985 4.68698 19.2371 4.78581 19.413 4.96172C19.589 5.13763 19.6878 5.37622 19.6878 5.625C19.6878 5.87378 19.589 6.11237 19.413 6.28828L10.7002 15L19.413 23.7117Z"
                        fill="#232323"/>
                </svg>
            </Link>
        </div>
    );
};

export default HeadingLine;