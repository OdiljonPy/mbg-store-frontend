import React from 'react';
import css from './language.module.css'
import {useLocale} from 'next-intl';
import {ILanguage, ILanguagesIcons} from "@/layout/components/header/main-header/data-types/languages";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {languagesIcons} from "@/constants/languages/languages";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";

interface props {
    language: ILanguage
    onClose: () => void
}

const Language = ({language, onClose}: props) => {
    const {code, title} = language
    const pathname = usePathname()
    const locale = useLocale()
    return (
        <Link href={{
            pathname
        }} onClick={onClose} locale={code} scroll={false}
              className={`${css.language} ${locale === code ? css.active : ''}`}>
            <span className={css.icon}>
                <ResponsiveImage src={languagesIcons[code as keyof ILanguagesIcons]} alt={title}/>
            </span>
            <span className={css.name}>
                {title}
            </span>
        </Link>
    );
};

export default Language;