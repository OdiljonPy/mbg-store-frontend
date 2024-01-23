import React, {PropsWithChildren} from 'react';
import css from './body.module.css'
interface props {
open: boolean
}

const Body = ({children, open}: PropsWithChildren<props>) => {
    return (
        <div className={`${css.body} ${open ? css.opened : ''}`}>
            {children}
        </div>
    );
};

export default Body;