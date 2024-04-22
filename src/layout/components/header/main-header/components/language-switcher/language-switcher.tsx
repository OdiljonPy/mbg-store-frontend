import React, {useEffect} from 'react';
import css from './language-switcher.module.css'
import {ILanguagePointer, ILanguagesIcons} from "@/layout/components/header/main-header/data-types/languages";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import {languages, languagesIcons, languagesObj} from "@/constants/languages/languages";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useRouter} from "next/router";

interface props {

}

const LanguageSwitcher = (props: props) => {
    const {query, locale,reload} = useRouter()
    const pathname = usePathname()

    const changeLocale = () =>{
        setTimeout(()=>reload(),1000)
    }

    useEffect(() => {
        if(locale){
            localStorage.setItem('locale',locale)
         }
    }, [locale]);



    return (
        <Link href={{
            query,
            pathname,
        }} scroll={false} className={css.language}
              locale={languages.find((item) => item.code !== (locale === 'default' ? 'uz' : locale))?.code ?? 'uz' }
              onClick={()=> changeLocale()}
        >
            <span className={css.icon}>
                <ResponsiveImage src={languagesIcons[(locale === 'default' ? 'uz' : locale) as keyof ILanguagesIcons]} alt={locale}/>
            </span>
            {languagesObj[(locale === 'default' ? 'uz' : locale) as keyof ILanguagePointer]?.slice(0, 3)}
        </Link>
    );
};

export default LanguageSwitcher;