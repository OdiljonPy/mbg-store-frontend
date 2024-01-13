import React from 'react';
import css from './socials.module.css'
import {socials} from "@/layout/components/footer/constants/socials";


interface props {

}

const Socials = (props: props) => {
    return (
        <div className={css.socials}>
            {socials.map(({
                              path,
                              icon
                          }) => (
                <a key={path} className={css.social} href={path} target={'_blank'} rel={'noreferrer'}>
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default Socials;