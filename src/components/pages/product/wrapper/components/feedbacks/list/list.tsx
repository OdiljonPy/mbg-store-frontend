import React from 'react';
import css from './list.module.css'
import {feedbacksMock} from "@/components/pages/product/wrapper/components/feedbacks/constants/feedbacks-mock";
import Feedback from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback";
import {IComments} from "@/data-types/products/common";

interface props {
    comments:IComments[]
    loading:boolean
}

const List = ({comments,loading}: props) => {
    return (
        <div className={css.list}>
            {comments?.map((item) => (
                <Feedback feedback={item} key={item.name}/>
            ))}
        </div>
    );
};

export default List;