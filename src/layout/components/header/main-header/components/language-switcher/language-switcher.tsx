import React from 'react';
import css from './language-switcher.module.css'
import {ILanguagePointer, ILanguagesIcons} from "@/layout/components/header/main-header/data-types/languages";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {languages, languagesIcons, languagesObj} from "@/constants/languages/languages";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useRouter} from "next/router";

interface props {

}

const LanguageSwitcher = (props: props) => {
    const {query, locale} = useRouter()
    const pathname = usePathname()





    return (
        <Link href={{
            pathname,
            query
        }} scroll={false} className={css.language}
              locale={languages.find((item) => item.code !== locale)?.code ?? 'uz'}>
            <span className={css.icon}>
                <ResponsiveImage src={languagesIcons[locale as keyof ILanguagesIcons]} alt={locale}/>
            </span>
            {languagesObj[locale as keyof ILanguagePointer]?.slice(0, 3)}
        </Link>
    );
};

export default LanguageSwitcher;