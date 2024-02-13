import React from 'react';
import css from './header.module.css'
import {IQuestion} from "@/components/pages/about/faq/data-types/faq";
import PlusBtn from "@/components/shared/plus-btn/plus-btn";

interface props {
    item: IQuestion
    onToggle: () => void
    open: boolean
}

const Header = ({item, onToggle, open}: props) => {
    const {question, id} = item
    return (
        <div onClick={onToggle} className={`${css.header} ${open ? css.opened : ''}`}>
            <div className={css.info}>
                <p className={css.number}>
                    0{id}
                </p>
                <h4 className={css.question}>
                    {question}
                </h4>
            </div>
            <PlusBtn open={open}/>
        </div>
    );
};

export default Header;