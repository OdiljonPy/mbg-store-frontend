import React from 'react';
import css from './body.module.css'

interface props {
    answer: string
    open: boolean
}

const Body = ({answer, open}: props) => {
    return (
        <div className={`${css.body} ${open ? css.open : ''}`}>
            <p>
                {answer}
            </p>
        </div>
    );
};

export default Body;