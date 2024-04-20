import React, {useState} from 'react';
import css from './list.module.css'
import {feedbacksMock} from "@/components/pages/product/wrapper/components/feedbacks/constants/feedbacks-mock";
import Feedback from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback";
import {IComments} from "@/data-types/products/common";
import Pagination from "@/components/shared/pagination/pagination";
import FeedbackLoader
    from "@/components/pages/product/wrapper/components/feedbacks/list/feedback-loader/feedback-loader";
import {IProductComments} from "@/data-types/products/product-comments/product-comments";

interface props {
    comments:IProductComments
    loading:boolean
    setOffset:(offset:number)=>void
}

const List = ({comments,loading,setOffset}: props) => {
    return (
        <div className={css.list}>
            {
                loading ?
                    <div className={css.list}>
                        <FeedbackLoader/>
                        <FeedbackLoader/>
                        <FeedbackLoader/>
                    </div>:
                    comments?.content?.map((item) => (
                     <Feedback feedback={item} key={item.name}/>))
            }
            {
                (!loading && comments?.totalPages > 1) &&
                <Pagination total={comments?.totalElements} offset={comments?.content.length} limit={5} setOffset={(offset)=> setOffset(offset)}/>
            }
        </div>
    );
};

export default List;