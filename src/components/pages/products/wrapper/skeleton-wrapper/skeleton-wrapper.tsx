import css from "./skeleton-wrapper.module.css"
import Skeleton from "react-loading-skeleton";
import React from "react";
const SkeletonWrapper = () =>{
    const skeletonArr = [0,1,2,3,4,5]
    return(
        <div className={css.wrapper}>

            {skeletonArr.map((el)=>{
                return <Skeleton count={4} containerClassName={css.wrapper} className={css.skeleton_item}/>
            })}
        </div>
    )
}
export default SkeletonWrapper