import React from 'react';
import css from './feedbacks.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Filters from "@/components/pages/product/wrapper/components/feedbacks/filters/filters";
import List from "@/components/pages/product/wrapper/components/feedbacks/list/list";
import {IComments} from "@/data-types/products/common";

interface props {
    comments:IComments[]
    loading:boolean
}

const Feedbacks = ({comments,loading}: props) => {
    return (
        <section className={css.feedback}>
            <HeadingLine small heading={{
                title: 'product.feedback'
            }}/>
            <div className={css.wrapper}>
                <Filters/>
                <List comments={comments} loading={loading}/>
            </div>
        </section>
    );
};

export default Feedbacks;
