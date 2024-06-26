import React from 'react';
import css from "@/components/pages/about/faq/custom-collapse/header/header.module.css";
import PlusBtn from "@/components/shared/plus-btn/plus-btn";
import {useTranslations} from 'next-intl';

interface props {
    onToggle: () => void
    open: boolean
}

const Header = ({onToggle, open}: props) => {
    const t = useTranslations()

    return (
        <div onClick={onToggle} className={`${css.header} ${open ? css.opened : ''}`}>
            <div className={css.info}>
                <h4 className={css.question}>
                    {t('product.about')}
                </h4>
            </div>
            <PlusBtn open={open}/>
        </div>
    );
};

export default Header;