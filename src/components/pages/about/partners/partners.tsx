import React from 'react';
import css from './partners.module.css'
import HeadingLine from "@/components/pages/about/heading-line/heading-line";
import PartnersSlider from "@/components/pages/about/partners/partners-slider/partners-slider";

interface Props {

}

const Partners = (props: Props) => {
    return (
        <section className={css.partners}>
            <div className={'container'}>
                <HeadingLine title={'about.partners'}/>
            </div>
            <PartnersSlider/>
        </section>
    );
};

export default Partners;