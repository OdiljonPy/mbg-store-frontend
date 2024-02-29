import React from 'react';
import css from './title.module.css'
import Skeleton from "react-loading-skeleton";
interface props {
title: string
loading?:boolean
skeletonWidth?:number
}

const Title = ({title,loading,skeletonWidth}: props) => {
    return (
        <h1 className={css.title}>
            {!loading ? <Skeleton count={1} height={'40px'} width={skeletonWidth ? `${skeletonWidth}px` :'100%'}  /> : title}
        </h1>
    );
};

export default Title;