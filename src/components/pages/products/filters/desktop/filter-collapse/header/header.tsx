import React from 'react';
import css from './header.module.css'
import PlusBtn from "@/components/shared/plus-btn/plus-btn";

interface props {
    onToggle: () => void
    open: boolean
    title: string
}

const Header = ({open, onToggle, title}: props) => {
    return (
        <div onClick={onToggle} className={css.header}>
            <h4 className={css.title}>
                {title}
            </h4>
            <PlusBtn  open={open}/>
        </div>
    );
};

export default Header;