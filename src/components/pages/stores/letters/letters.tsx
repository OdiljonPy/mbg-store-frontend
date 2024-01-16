import React from 'react';
import css from './letters.module.css'
import {letters} from "@/constants/letters/letters";
import Letter from "@/components/pages/stores/letters/letter/letter";

interface props {

}


const Letters = (props: props) => {
    return (
        <div className={css.letters}>
            {letters.map((letter) => (
                <Letter letter={letter} key={letter}/>
            ))}
        </div>
    );
};

export default Letters;