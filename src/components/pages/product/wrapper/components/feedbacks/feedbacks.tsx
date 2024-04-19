import React from 'react';
import css from './feedbacks.module.css'
import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Filters from "@/components/pages/product/wrapper/components/feedbacks/filters/filters";
import List from "@/components/pages/product/wrapper/components/feedbacks/list/list";
import {IComments} from "@/data-types/products/common";
import {IProductComments} from "@/data-types/products/product-comments/product-comments";

interface props {
    comments:IProductComments
    loading:boolean,
    rating:number,
    rating_count:number
}

const Feedbacks = ({comments,loading,rating,rating_count}: props) => {
    return (
        <section className={css.feedback}>
            <HeadingLine small heading={{
                title: 'product.feedback'
            }}/>
            <div className={css.wrapper}>
                <Filters rating_count={comments?.rating_count} rating={rating} all_rating={rating_count} loading={loading}/>
                <List comments={comments?.content} loading={loading}/>
            </div>
        </section>
    );
};

export default Feedbacks;
