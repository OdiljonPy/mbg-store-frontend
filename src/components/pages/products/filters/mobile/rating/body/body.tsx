import React from 'react';
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import {useRatingList} from "@/components/pages/products/filters/mobile/hooks/use-rating-list/use-rating-list";
import RatingItem from "@/components/pages/products/filters/mobile/rating/rating-item/rating-item";

interface props {

}

const Body = (props: props) => {
    const items = useRatingList()
    return (
        <div className={css.wrapper}>
            {items.map((item) => (
                <RatingItem item={item} key={item.key}/>
            ))}
        </div>
    );
};

export default Body;