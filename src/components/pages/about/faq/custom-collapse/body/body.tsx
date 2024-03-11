import React from 'react';
import css from './body.module.css'

interface Props {
    answer: string
    open: boolean
}

const Body = ({answer, open}: Props) => {
    return (
        <div className={`${css.body} ${open ? css.open : ''}`}>
            <p>
                {answer}
            </p>
        </div>
    );
};

export default Body;