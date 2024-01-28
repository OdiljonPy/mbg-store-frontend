import React from 'react';
import css from './feedbacks.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Filters from "@/components/pages/product/wrapper/components/feedbacks/filters/filters";

interface props {

}

const Feedbacks = (props: props) => {
    return (
        <section className={css.feedback}>
            <HeadingLine small heading={{
                title: 'product.feedback'
            }}/>
            <div className={css.wrapper}>
                <Filters/>
            </div>
        </section>
    );
};

export default Feedbacks;