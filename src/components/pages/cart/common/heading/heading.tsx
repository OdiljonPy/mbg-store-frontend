import {raleway} from "@/constants/fonts/fonts";
import css from "./heading.module.css"
import React, {ReactElement} from "react";
import {useTranslations} from "next-intl";
import {Badge} from "antd";

interface props{
    title:string
    index?:string | number
    isBadge?:boolean
    children?:any
    badeCount?:number
}

const Heading = ({title,index,isBadge,children,badeCount}:props) =>{
    const t = useTranslations()
    return(
       <div className={css.header}>
           <div className={css.flex_badge}>
               <h2 className={`${css.title} ${raleway.className}`}>{index && `${index}.`} {t(title)}</h2> {isBadge &&  <Badge count={badeCount} color={'#39B969'} />}
           </div>
           {children}
       </div>
    )
}

export default Heading