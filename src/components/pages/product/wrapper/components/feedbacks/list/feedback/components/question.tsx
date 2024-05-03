import css from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback.module.css";
import {formatDate} from "@/utils/format-date/format-date";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from "../../../../../../../../../../public/images/icons/star.svg";
import React from "react";
import {IComments} from "@/data-types/products/common";

interface props {
    feedback: IComments
}
const Question = ({feedback}:props) =>{
    const {name, rating, comment, images,created_at,answers} = feedback
    return(
        <div>
            <div className={css.header}>
                <h3 className={css.name}>
                    {!(name === 'null') ? name : ''}
                </h3>
                <div className={css.info}>
                    <p className={css.date}>
                        {formatDate(created_at)}
                    </p>
                    <p className={css.point}>
                        <span className={css.star}>
                            <ResponsiveImage src={star} alt={name}/>
                        </span>
                        <span className={css.count}>
                            {rating}
                        </span>
                    </p>
                </div>
            </div>
            <div className={css.body}>
                <p className={css.message}>{comment} </p>
                {
                    images?.length ?  <div className={css.images}>
                        {images?.map((item) => (
                            <div key={item?.id} className={css.img}>
                                <ResponsiveImage src={item?.image} alt={''}/>
                            </div>
                        ))}
                    </div> : ''
                }
            </div>
        </div>
    )
}

export default Question