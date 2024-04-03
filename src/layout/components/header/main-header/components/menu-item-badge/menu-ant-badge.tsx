import {Badge} from "antd";
import css from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge.module.css";
import React from "react";
import {IBadge} from "@/layout/components/header/main-header/data-types/badge";

interface props{
    badge: IBadge
    mobile?:boolean
}
const MenuAntBadge = ({badge,mobile}:props) =>{
    const {icon, title, count, path} = badge
    return(
        <Badge count={count} style={{backgroundColor: '#39B969', borderColor: 'transparent'}}>
            <span className={`${css.icon} ${mobile ? css.mobile_icon:''}`}>
            {icon}
            </span>
        </Badge>
    )
}

export default MenuAntBadge