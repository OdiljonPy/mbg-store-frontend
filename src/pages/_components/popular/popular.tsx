import React from 'react';
import css from './popular.module.css'
import HeadingLine from "@/shared/heading-line/heading-line";

interface props {

}

const Popular = (props: props) => {
    return (
        <section className={css.popular}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.popular'
                }}/>
            </div>
        </section>
    );
};

export default Popular;