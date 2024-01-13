import React from 'react';
import css from './language-switcher.module.css'
import {useTranslation} from "next-i18next";
import {
    ILanguagePointer,
    ILanguagesIcons,
    Languages
} from "@/layout/components/header/main-header/data-types/languages";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {languages, languagesIcons, languagesObj} from "@/constants/languages";
import ResponsiveImage from "@/shared/responsive-image/responsive-image";

interface props {

}

const LanguageSwitcher = (props: props) => {
    const {i18n} = useTranslation()
    const pathname = usePathname()

    const {language} = i18n

    return (
        <Link href={pathname} scroll={false} className={css.language}
              locale={languages.find((item) => item.code !== language)?.code ?? 'uz'}>
            <span className={css.icon}>
                <ResponsiveImage src={languagesIcons[language as keyof ILanguagesIcons]} alt={language}/>
            </span>
            {languagesObj[language as keyof ILanguagePointer]?.slice(0,3)}
        </Link>
    );
};

export default LanguageSwitcher;