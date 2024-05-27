import React from 'react';
import css from './feedback.module.css'
import {IComments} from "@/data-types/products/common";
import Answer from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/components/answer";
import Question from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/components/question";

interface props {
    feedback: IComments
}

const Feedback = ({feedback}: props) => {

    return (
        <div className={css.feedback}>
            <Question feedback={feedback}/>

            <div className={css.answers_box}>
                {
                    feedback?.answers?.length ? feedback?.answers.map((answer)=> <Answer answer={answer} key={answer?.id} />):""
                }
            </div>
        </div>
    );
};

export default Feedback;