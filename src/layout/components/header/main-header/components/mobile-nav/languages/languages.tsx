import React from 'react';
import css from './languages.module.css'
import {languages} from "@/constants/languages/languages";
import Language from "@/layout/components/header/main-header/components/mobile-nav/language/language";

interface props {

}

const Languages = (props: props) => {
    return (
        <div className={css.languages}>
            {languages.map((language) => (
                <Language language={language} key={language.code}/>
            ))}
        </div>
    );
};

export default Languages;