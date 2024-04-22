import React from 'react';
import css from './plus-btn.module.css'

interface props {
    onClick?: () => void
    open: boolean
}

const PlusBtn = ({
                     onClick,
                     open
                 }: props) => {
    return (
        <button onClick={()=>onClick} className={`${css.btn} ${open ? css.active : ''}`}/>
    );
};

export default PlusBtn;