import React, {useEffect} from 'react';
import css from './language.module.css'
import {useLocale} from 'next-intl';
import {ILanguage, ILanguagesIcons} from "@/layout/components/header/main-header/data-types/languages";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {languagesIcons} from "@/constants/languages/languages";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {useRouter} from "next/router";

interface props {
    language: ILanguage
    onClose: () => void
}

const Language = ({language, onClose}: props) => {
    const {code, title} = language
    const pathname = usePathname()
    const {reload} = useRouter()
    const locale = useLocale()

    const changeLocale = () =>{
        onClose()
        setTimeout(()=>reload(),1000)
    }

    useEffect(() => {
        if(locale){
            localStorage.setItem('locale',locale)
        }
    }, [locale]);

    return (
        <Link href={{
            pathname
        }} locale={code} onClick={()=> changeLocale()}  scroll={false}
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