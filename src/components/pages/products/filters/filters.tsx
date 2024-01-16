import React from 'react';
import css from './filters.module.css'
import {useSearchParams} from "next/navigation";

interface props {

}

const Filters = (props: props) => {
    const searchParams  = useSearchParams()
    const isOpened: string | null = searchParams.get('filters')
    return (
        <div className={`${css.filters} ${isOpened ? css.show : ''}`}>

        </div>
    );
};

export default Filters;