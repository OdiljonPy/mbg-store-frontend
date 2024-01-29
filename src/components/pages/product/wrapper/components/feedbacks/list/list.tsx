import React from 'react';
import css from './list.module.css'
import {feedbacksMock} from "@/components/pages/product/wrapper/components/feedbacks/constants/feedbacks-mock";
import Feedback from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback";

interface props {

}

const List = (props: props) => {
    return (
        <div className={css.list}>
            {feedbacksMock.map((item) => (
                <Feedback feedback={item} key={item.name}/>
            ))}
        </div>
    );
};

export default List;