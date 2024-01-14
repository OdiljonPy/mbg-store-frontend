import React from 'react';
import css from './popular.module.css'
import HeadingLine from "@/shared/heading-line/heading-line";
import Categories from "@/pages/_components/popular/categories/categories";

interface props {

}

const Popular = (props: props) => {
    return (
        <section className={css.popular}>
            <div className={'container'}>
                <HeadingLine heading={{
                    title: 'products.popular'
                }}/>
                <Categories/>
            </div>
        </section>
    );
};

export default Popular;