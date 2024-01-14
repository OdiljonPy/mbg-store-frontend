import React, {useEffect} from 'react';
import css from './mobile-nav.module.css'
import {useModal} from "@/hooks/use-modal";
import List from "@/layout/components/header/main-header/components/mobile-nav/list/list";
import Languages from "@/layout/components/header/main-header/components/mobile-nav/languages/languages";
import {usePathname} from "next/navigation";
import {useTranslation} from "next-i18next";

interface props {

}

const MobileNav = (props: props) => {
    const {open, onToggle} = useModal()
    const pathname = usePathname()
    const {i18n} = useTranslation()


    useEffect(() => {
        onToggle()
    }, [i18n.language, pathname])

    return (
        <nav className={css.nav}>
            <button onClick={onToggle} className={`${css.burger} ${open ? css.open : ''}`}>
                <span className={`${css.line} ${css.line1}`}/>
                <span className={`${css.line} ${css.line2}`}/>
                <span className={`${css.line} ${css.line3}`}/>
            </button>
            <div className={`${css.drawer} ${open ? css.show : ''}`}>
                <Languages/>
                <List/>
            </div>
        </nav>
    );
};

export default MobileNav;