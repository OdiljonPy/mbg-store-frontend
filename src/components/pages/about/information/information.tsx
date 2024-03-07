import React from 'react';
import css from './information.module.css'
import InformationList from "@/components/pages/about/information/information-list/information-list";
import HeadingLine from "@/components/pages/about/heading-line/heading-line";

interface Props {

}

const Information = (props: Props) => {
    return (
        <section className={css.info}>
          <div className={'container'}>
              <HeadingLine title={'about.title'}/>
              <InformationList/>
          </div>
        </section>
    );
};

export default Information;