import React from 'react';
import css from './feedback.module.css'
import {IFeedback} from "@/data-types/feedback/feedback";
import star from '@/../public/images/icons/star.svg'
import img from '@/../public/images/products/mikado.png'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";

interface props {
    feedback: IFeedback
}

const Feedback = ({feedback}: props) => {


    const {name, date, rate, message, images} = feedback

    return (
        <div className={css.feedback}>
            <div className={css.header}>
                <h3 className={css.name}>
                    {name}
                </h3>
                <div className={css.info}>
                    <p className={css.date}>
                        {date}
                    </p>
                    <p className={css.point}>
                        <span className={css.star}>
                            <ResponsiveImage src={star} alt={name}/>
                        </span>
                        <span className={css.count}>
                            {rate}
                        </span>
                    </p>
                </div>
            </div>
            <div className={css.body}>
                <p className={css.message}>
                    {message}
                </p>
            </div>
            <div className={css.images}>
                {images.map((item) => (
                    <div key={item} className={css.img}>
                        <ResponsiveImage src={img} alt={''}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;