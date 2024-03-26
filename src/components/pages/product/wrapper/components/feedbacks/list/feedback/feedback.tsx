import React from 'react';
import css from './feedback.module.css'
import {IFeedback} from "@/data-types/feedback/feedback";
import star from '@/../public/images/icons/star.svg'
import img from '@/../public/images/products/mikado.png'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IComments} from "@/data-types/products/common";
import {formatDate} from "@/utils/format-date/format-date";

interface props {
    feedback: IComments
}

const Feedback = ({feedback}: props) => {


    const {name, rating, comment, images,created_at} = feedback

    return (
        <div className={css.feedback}>
            <div className={css.header}>
                <h3 className={css.name}>
                    {name}
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
                <p className={css.message}>
                    {comment}
                </p>
            </div>
            <div className={css.images}>
                {images?.map((item) => (
                    <div key={item?.id} className={css.img}>
                        <ResponsiveImage src={item?.image} alt={''}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;