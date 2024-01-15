import React from 'react';
import css from './chat-btn.module.css'
import {useTranslation} from "next-i18next";

interface props {

}

const ChatBtn = (props: props) => {
    const {t} = useTranslation()
    return (
        <button className={css.btn}>

        </button>
    );
};

export default ChatBtn;