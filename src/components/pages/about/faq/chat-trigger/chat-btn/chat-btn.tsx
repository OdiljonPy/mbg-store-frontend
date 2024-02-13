import React from 'react';
import css from './chat-btn.module.css'
import {useTranslations} from 'next-intl';

interface props {

}

const ChatBtn = (props: props) => {
    const t = useTranslations()
    return (
        <button className={css.btn}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.0412 17.5258C22.6142 16.361 22.8998 15.0758 22.874 13.778C22.8483 12.4801 22.5119 11.2073 21.8931 10.0661C21.2743 8.92499 20.391 7.94872 19.3173 7.2191C18.2437 6.48947 17.0108 6.02773 15.722 5.87254C15.2945 4.87613 14.672 3.97535 13.891 3.22327C13.1101 2.47119 12.1865 1.88301 11.1747 1.4934C10.1629 1.10379 9.08337 0.920627 7.99969 0.954696C6.91601 0.988766 5.85011 1.23938 4.86479 1.69178C3.87947 2.14418 2.99466 2.7892 2.26248 3.58886C1.53031 4.38851 0.965588 5.32661 0.601587 6.3479C0.237587 7.36919 0.0816716 8.453 0.143027 9.53547C0.204383 10.618 0.481768 11.6772 0.95884 12.6508L0.180872 15.3747C0.11145 15.6184 0.108409 15.8762 0.172063 16.1215C0.235716 16.3667 0.363753 16.5905 0.542922 16.7697C0.722092 16.9489 0.945885 17.0769 1.19114 17.1406C1.4364 17.2042 1.69421 17.2012 1.9379 17.1318L4.66181 16.3538C5.48376 16.7573 6.36792 17.0193 7.27704 17.1287C7.71041 18.144 8.34613 19.0604 9.1454 19.8218C9.94468 20.5833 10.8907 21.1739 11.9259 21.5576C12.961 21.9413 14.0634 22.11 15.1659 22.0535C16.2684 21.9969 17.3478 21.7163 18.3382 21.2288L21.0621 22.0068C21.3058 22.0762 21.5636 22.0792 21.8089 22.0156C22.0541 21.9519 22.2779 21.8239 22.4571 21.6447C22.6363 21.4655 22.7643 21.2417 22.828 20.9965C22.8916 20.7512 22.8886 20.4934 22.8192 20.2497L22.0412 17.5258ZM20.3898 17.6619L21.1566 20.3442L18.4743 19.5774C18.27 19.5199 18.0512 19.5447 17.8649 19.6464C16.3672 20.4613 14.6094 20.6556 12.9699 20.1876C11.3303 19.7196 9.93997 18.6266 9.09806 17.1439C10.2106 17.0281 11.2872 16.6835 12.2604 16.1319C13.2335 15.5803 14.0821 14.8335 14.753 13.9385C15.4239 13.0434 15.9025 12.0193 16.1589 10.9305C16.4153 9.84172 16.4439 8.71167 16.243 7.61129C17.2166 7.84073 18.1241 8.29179 18.8949 8.92933C19.6656 9.56686 20.2789 10.3737 20.6868 11.287C21.0948 12.2003 21.2864 13.1954 21.2469 14.1949C21.2073 15.1944 20.9377 16.1713 20.4588 17.0495C20.3563 17.2366 20.3315 17.4566 20.3898 17.6619Z"
                    fill="#39B969"/>
            </svg>
            <span className={css.text}>
                {t('about.writeToChat')}
            </span>
        </button>
    );
};

export default ChatBtn;