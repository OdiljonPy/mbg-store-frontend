import React from 'react';
import css from './languages.module.css'
import {languages} from "@/constants/languages/languages";
import Language from "@/layout/components/header/main-header/components/mobile-nav/language/language";

interface props {
onClose: () => void

}

const Languages = ({onClose}: props) => {
    return (
        <div className={css.languages}>
            {languages.map((language) => (
                <Language onClose={onClose} language={language} key={language.code}/>
            ))}
        </div>
    );
};

export default Languages;