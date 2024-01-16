import React from 'react';
import css from './mobile-nav.module.css'
import {useModal} from "@/hooks/use-modal";
import List from "@/layout/components/header/main-header/components/mobile-nav/list/list";
import Languages from "@/layout/components/header/main-header/components/mobile-nav/languages/languages";

interface props {

}

const MobileNav = (props: props) => {
    const {open, onClose, onToggle} = useModal()





    return (
        <nav className={css.nav}>
            <button onClick={onToggle} className={`${css.burger} ${open ? css.open : ''}`}>
                <span className={`${css.line} ${css.line1}`}/>
                <span className={`${css.line} ${css.line2}`}/>
                <span className={`${css.line} ${css.line3}`}/>
            </button>
            <div className={`${css.drawer} ${open ? css.show : ''}`}>
                <Languages onClose={onClose}/>
                <List onClose={onClose}/>
            </div>
        </nav>
    );
};

export default MobileNav;