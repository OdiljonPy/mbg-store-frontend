import React from 'react';
import css from './intro.module.css'
import Info from "@/components/pages/store/intro/info/info";
import Deliveries from "@/components/pages/store/intro/deliveries/deliveries";

interface props {

}

const Intro = (props: props) => {
    return (
        <section className={css.info}>
            <Info/>
            <Deliveries/>
        </section>
    );
};

export default Intro;