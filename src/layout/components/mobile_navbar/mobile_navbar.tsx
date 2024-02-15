import css from "./mobile_navbar.module.css"
import MenuItemBadge from "@/layout/components/header/main-header/components/menu-item-badge/menu-item-badge";
import {cartBadge, favouritesBadge} from "@/constants/badges/badges";
import Login from "@/layout/components/header/main-header/components/login/login";
import React from "react";
import BookOpen from "@/layout/components/mobile_navbar/icon/book_open";
const MobileNavbar = () =>{
    return(
        <div className={css.mobile}>
            <BookOpen path='/catalog'/>
            <MenuItemBadge badge={favouritesBadge} mobile={true}/>
            <MenuItemBadge badge={cartBadge} mobile={true}/>
            <Login mobile={true}/>
        </div>
    )
}

export default MobileNavbar