import React from 'react';
import css from './info.module.css'
import Gallery from "@/components/pages/product/wrapper/components/info/gallery/gallery";
import Description from "@/components/pages/product/wrapper/components/info/description/description";

interface props {

}

const Info = (props: props) => {
    return (
        <section className={css.info}>
            <Gallery/>
            <Description/>
        </section>
    );
};

export default Info;