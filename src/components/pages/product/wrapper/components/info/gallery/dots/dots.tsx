import React from 'react';
import css from './dots.module.css'

interface props {
items: number
    currentSlide: number
    onChangeSlide: (i:number) => void
}

const Dots = ({items, currentSlide, onChangeSlide}: props) => {

    return (
        <div className={css.wrapper}>
            {Array.from(Array(items), (_, i) => i+1).map((item, index) => (
                <div key={item} onClick={() => onChangeSlide(index)} className={`${css.dot} ${index === currentSlide ? css.active : ''}`}/>
            ))}
        </div>
    );
};

export default Dots;