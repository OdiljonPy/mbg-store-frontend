import React from 'react';
import css from './filters.module.css'
import Rate from "@/components/pages/product/wrapper/components/info/description/rate/rate";

interface props {

}

const Filters = (props: props) => {
    return (
        <div className={css.filters}>
            <Rate rate={4} count={150}/>
        </div>
    );
};

export default Filters;