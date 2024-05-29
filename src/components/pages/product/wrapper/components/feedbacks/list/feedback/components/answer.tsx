import css from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback.module.css";
import {formatDate} from "@/utils/format-date/format-date";
import React from "react";
import {ICommentAnswers} from "@/data-types/products/common";

interface props{
    answer:ICommentAnswers
}
const Answer = ({answer}:props)=>{
    return (
        <div className={css.answer}>
            <div className={css.header}>
                <h3 className={`${css.name} ${css.answer_name}`}>{answer?.name}</h3>
                <p className={css.date}>{formatDate(answer?.created_at)}</p>
            </div>
            <div className={css.body}>
                <p className={css.message}>
                    {answer?.comment}
                </p>
            </div>
        </div>
    )
}

export default Answer