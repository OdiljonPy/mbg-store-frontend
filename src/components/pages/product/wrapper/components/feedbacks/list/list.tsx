import React, {useState} from 'react';
import css from './list.module.css'
import {feedbacksMock} from "@/components/pages/product/wrapper/components/feedbacks/constants/feedbacks-mock";
import Feedback from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback";
import {IComments} from "@/data-types/products/common";
import Pagination from "@/components/shared/pagination/pagination";

interface props {
    comments:IComments[]
    loading:boolean
}

const List = ({comments,loading}: props) => {
    const [offset,setOffset] = useState(5)
    return (
        <div className={css.list}>
            {
                loading ? <p>Loading</p>:
                comments?.slice(1,offset).map((item) => (
                <Feedback feedback={item} key={item.name}/>
            ))}
            {
                (!loading && comments?.length > 5) &&
                <Pagination total={comments?.length} offset={offset} limit={5} setOffset={(offset)=> setOffset(offset)}/>
            }
        </div>
    );
};

export default List;