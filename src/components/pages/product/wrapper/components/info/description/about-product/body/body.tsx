import React, {PropsWithChildren} from 'react';
import css from "@/components/pages/about/faq/custom-collapse/body/body.module.css";
import mainCss from './body.module.css'

interface props {
open: boolean
}

const Body = ({open, children}: PropsWithChildren<props>) => {
    return (
        <div className={`${css.body} ${mainCss.body} ${open ? css.open : ''}`}>
            {children}
        </div>
    );
};

export default Body;